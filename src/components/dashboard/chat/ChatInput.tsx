'use client'

import cn from 'clsx'
import { Paperclip, Smile } from 'lucide-react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { TextArea } from '@/components/ui/chat-elements/TextArea'

import { ButtonAction } from '@/ui/chat-elements/ButtonAction'
import { SendMessageButton } from '@/ui/chat-elements/SendMessageButton'

interface Props {
	isSmall?: boolean
}

export function ChatInput({ isSmall }: Props) {
	const [message, setMessage] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (message.trim()) {
			console.log('Sending message:', message)
			setMessage('')
		}
	}

	return (
		<div
			className={twMerge(
				'p-4 border-t border-gray-200 dark:border-white/10 backdrop-blur-xl bg-white/40 dark:bg-white/3 relative overflow-hidden',
				!isSmall && 'p-6'
			)}
		>
			<form
				onSubmit={handleSubmit}
				className="flex items-end space-x-3 relative z-10"
			>
				<div className="flex space-x-2">
					<ButtonAction className={cn(isSmall && 'w-9 h-9')}>
						<Paperclip className="icon" />
					</ButtonAction>
					<ButtonAction className={cn(isSmall && 'w-9 h-9')}>
						<Smile className="icon" />
					</ButtonAction>
				</div>

				<TextArea
					message={message}
					setMessage={setMessage}
					handleSubmit={handleSubmit}
				/>

				<SendMessageButton
					disabled={!message.trim()}
					className={cn(isSmall && 'w-9 h-9')}
				/>
			</form>
		</div>
	)
}
