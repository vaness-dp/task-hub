// components/messages/MessageBubble.tsx
interface Message {
	id: string
	text: string
	sender: string
	avatar: string
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
				className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${message.isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}
			>
				{/* Аватар */}
				{!message.isOwn && (
					<div className="w-8 h-8 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-600 dark:to-neutral-700 rounded-full flex items-center justify-center text-sm flex-shrink-0">
						{message.avatar}
					</div>
				)}

				{/* Сообщение */}
				<div
					className={`px-4 py-3 rounded-2xl ${
						message.isOwn
							? 'bg-primary text-white rounded-br-md'
							: 'bg-neutral-100 dark:bg-neutral-700 text-[#2a2a2a] dark:text-[#f5f5f5] rounded-bl-md'
					}`}
				>
					<p className="text-sm">{message.text}</p>
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
