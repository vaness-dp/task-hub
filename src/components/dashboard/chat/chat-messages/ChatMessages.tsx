'use client'

import { useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

import type { IMessage } from '@/types/messages.types'

import { DateIndicator } from './DateIndicator'
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
			<DateIndicator />

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
