'use client'

import { useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

import type { IMessage } from '@/types/messages.types'

import { MessageBubble } from './MessageBubble'
import { MOCK_CHAT_MESSAGES } from './chat-messages.data'

interface Props extends Pick<IMessage, 'chatId'> {
	isSmall?: boolean
}

export function ChatMessages({ chatId, isSmall }: Props) {
	const messagesEndRef = useRef<HTMLDivElement>(null)
	const messages = MOCK_CHAT_MESSAGES[chatId as keyof typeof MOCK_CHAT_MESSAGES] || []

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}

	useEffect(() => {
		scrollToBottom()
	}, [messages])

	return (
		<div className={twMerge('flex-1 overflow-y-auto p-6 space-y-4', isSmall && 'p-4')}>
			{/* Date indicator */}
			<div className="flex justify-center">
				<div className="px-3 py-1 backdrop-blur-sm bg-white/60 dark:bg-white/10 border border-white/30 dark:border-white/20 rounded-full text-xs text-gray-600 dark:text-gray-400 relative overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 dark:from-white/8 dark:to-transparent rounded-full" />
					<span className="relative z-10">Today</span>
				</div>
			</div>

			{/* Messages */}
			{messages.map(message => (
				<MessageBubble
					key={message.id}
					message={message}
				/>
			))}

			<div ref={messagesEndRef} />
		</div>
	)
}
