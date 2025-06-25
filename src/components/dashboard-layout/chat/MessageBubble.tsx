// components/dashboard-layout/chat/MessageBubble.tsx
interface Message {
	id: number
	sender: string
	avatar: string
	text: string
	time: string
	isOwn: boolean
}

interface MessageBubbleProps {
	message: Message
}

export function MessageBubble({ message }: MessageBubbleProps) {
	return (
		<div className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
			<div
				className={`flex items-end space-x-2 max-w-xs ${message.isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}
			>
				{/* Аватар только для чужих сообщений */}
				{!message.isOwn && (
					<div className="w-8 h-8 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-600 dark:to-neutral-700 rounded-xl flex items-center justify-center flex-shrink-0">
						<span className="text-sm">{message.avatar}</span>
					</div>
				)}

				{/* Сообщение */}
				<div
					className={`px-4 py-3 rounded-2xl max-w-full ${
						message.isOwn
							? 'bg-primary text-white rounded-br-md'
							: 'bg-white dark:bg-neutral-700 text-[#2a2a2a] dark:text-[#f5f5f5] rounded-bl-md shadow-sm border border-neutral-200 dark:border-neutral-600'
					}`}
				>
					<p className="text-sm leading-relaxed">{message.text}</p>
					<p
						className={`text-xs mt-1 ${
							message.isOwn ? 'text-white/70' : 'text-neutral-500 dark:text-neutral-400'
						}`}
					>
						{message.time}
					</p>
				</div>
			</div>
		</div>
	)
}
