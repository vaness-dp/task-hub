// components/dashboard-layout/chat/ChatInput.tsx
'use client'

import { Paperclip, Send, Smile } from 'lucide-react'
import { useState } from 'react'

// components/dashboard-layout/chat/ChatInput.tsx

export function ChatInput() {
	const [message, setMessage] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (message.trim()) {
			console.log('Sending message:', message)
			setMessage('')
		}
	}

	return (
		<div className="p-4 border-t border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm">
			<form
				onSubmit={handleSubmit}
				className="flex items-end space-x-3"
			>
				{/* Дополнительные кнопки */}
				<div className="flex space-x-2">
					<button
						type="button"
						className="w-9 h-9 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
					>
						<Paperclip className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
					</button>
					<button
						type="button"
						className="w-9 h-9 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
					>
						<Smile className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
					</button>
				</div>

				{/* Поле ввода */}
				<div className="flex-1 relative">
					<textarea
						value={message}
						onChange={e => setMessage(e.target.value)}
						placeholder="Type here..."
						rows={1}
						className="w-full px-4 py-3 bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-2xl text-[#2a2a2a] dark:text-[#f5f5f5] placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none shadow-sm"
						onKeyDown={e => {
							if (e.key === 'Enter' && !e.shiftKey) {
								e.preventDefault()
								handleSubmit(e)
							}
						}}
					/>
				</div>

				{/* Кнопка отправки */}
				<button
					type="submit"
					disabled={!message.trim()}
					className="w-9 h-9 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary/90 disabled:bg-neutral-300 dark:disabled:bg-neutral-600 disabled:cursor-not-allowed transition-colors shadow-sm"
				>
					<Send className="w-4 h-4" />
				</button>
			</form>
		</div>
	)
}
