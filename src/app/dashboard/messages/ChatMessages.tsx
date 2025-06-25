'use client'

import { useEffect, useRef } from 'react'

import { MessageBubble } from './MessageBubble'

interface ChatMessagesProps {
	chatId: string
}

const mockMessages = {
	'1': [
		{
			id: '1',
			text: "Morning! I've been working on the design elements",
			sender: 'Sheila Dara',
			avatar: '👩‍💼',
			time: '09:28 am',
			isOwn: false
		},
		{
			id: '2',
			text: 'The new color palette looks great! What do you think about the typography?',
			sender: 'You',
			avatar: '👤',
			time: '09:30 am',
			isOwn: true
		},
		{
			id: '3',
			text: "I love the typography choice! It's very clean and modern. Should we proceed with this direction?",
			sender: 'Sheila Dara',
			avatar: '👩‍💼',
			time: '09:32 am',
			isOwn: false
		},
		{
			id: '4',
			text: "Absolutely! Let's move forward with this design",
			sender: 'You',
			avatar: '👤',
			time: '09:35 am',
			isOwn: true
		}
	],
	'2': [
		{
			id: '1',
			text: "That's great to hear! I've been focusing on market research",
			sender: 'Chris Manuel',
			avatar: '👨‍💻',
			time: '09:47 am',
			isOwn: false
		},
		{
			id: '2',
			text: 'Awesome! What are your findings so far?',
			sender: 'You',
			avatar: '👤',
			time: '09:50 am',
			isOwn: true
		}
	]
}

export function ChatMessages({ chatId }: ChatMessagesProps) {
	const messagesEndRef = useRef<HTMLDivElement>(null)
	const messages = mockMessages[chatId as keyof typeof mockMessages] || []

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}

	useEffect(() => {
		scrollToBottom()
	}, [messages])

	return (
		<div className="flex-1 overflow-y-auto p-6">
			<div className="space-y-4">
				{/* Дата */}
				<div className="flex justify-center">
					<div className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-full text-xs text-neutral-500 dark:text-neutral-400">
						Today
					</div>
				</div>

				{/* Сообщения */}
				{messages.map(message => (
					<MessageBubble
						key={message.id}
						message={message}
					/>
				))}

				<div ref={messagesEndRef} />
			</div>
		</div>
	)
}
