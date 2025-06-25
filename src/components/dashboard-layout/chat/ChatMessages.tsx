// components/dashboard-layout/chat/ChatMessages.tsx
'use client'

import { useEffect, useRef } from 'react'

import { MessageBubble } from './MessageBubble'

// components/dashboard-layout/chat/ChatMessages.tsx

// components/dashboard-layout/chat/ChatMessages.tsx

const messages = [
	{
		id: 1,
		sender: 'Sheila Dara',
		avatar: '👩‍💼',
		text: "Morning! I've been working on the design elements",
		time: '09:28 am',
		isOwn: false
	},
	{
		id: 2,
		sender: 'You',
		avatar: '👤',
		text: "That's great! How's the progress going?",
		time: '09:30 am',
		isOwn: true
	},
	{
		id: 3,
		sender: 'Chris Manuel',
		avatar: '👨‍💻',
		text: "That's great to hear! I've been focusing on market research",
		time: '09:47 am',
		isOwn: false
	}
]

export function ChatMessages() {
	const messagesEndRef = useRef<HTMLDivElement>(null)

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}

	useEffect(() => {
		scrollToBottom()
	}, [messages])

	return (
		<div className="flex-1 overflow-y-auto p-4 space-y-4">
			{/* Индикатор времени */}
			<div className="flex justify-center">
				<div className="px-3 py-1 bg-neutral-200 dark:bg-neutral-700 rounded-full text-xs text-neutral-500 dark:text-neutral-400">
					Today
				</div>
			</div>

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
