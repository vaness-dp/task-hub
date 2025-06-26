'use client'

import cn from 'clsx'
import { Paperclip, Smile } from 'lucide-react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { ButtonAction } from '@/ui/chat-elements/ButtonAction'
import { SendMessageButton } from '@/ui/chat-elements/SendMessageButton'
import { TextArea } from '@/ui/chat-elements/TextArea'

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
				'p-4 border-t border-neutral bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm',
				!isSmall && 'p-6'
			)}
		>
			<form
				onSubmit={handleSubmit}
				className="flex items-end space-x-3"
			>
				{/* Button actions */}
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
