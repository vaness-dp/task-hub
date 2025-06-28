import cn from 'clsx'

import type { IMessage } from '@/types/messages.types'

interface Props {
	message: IMessage
}

export function MessageBubble({ message }: Props) {
	return (
		<div className={cn('flex', message.isOwn ? 'justify-end' : 'justify-start')}>
			<div
				className={cn(
					'flex items-end space-x-2 max-w-xs lg:max-w-md',
					message.isOwn ? 'flex-row-reverse space-x-reverse' : ''
				)}
			>
				{/* Avatar */}
				{!message.isOwn && (
					<div className="w-8 h-8 backdrop-blur-sm bg-white/60 dark:bg-white/20 border border-white/30 dark:border-white/20 rounded-xl flex items-center justify-center text-sm flex-shrink-0 relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 rounded-xl" />
						<span className="relative z-10">{message.avatar}</span>
					</div>
				)}

				{/* Message */}
				<div
					className={cn(
						'px-4 py-3 rounded-2xl max-w-full relative overflow-hidden',
						message.isOwn
							? 'bg-primary text-white rounded-br-md shadow-lg'
							: 'backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/30 dark:border-white/20 text-gray-900 dark:text-white rounded-bl-md'
					)}
				>
					{/* Glass effects for received messages */}
					{!message.isOwn && (
						<>
							<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 dark:from-white/8 dark:to-transparent rounded-2xl" />
							<div className="absolute inset-[1px] border border-white/40 rounded-2xl pointer-events-none dark:border-transparent" />
						</>
					)}

					{/* Glass effects for sent messages */}
					{message.isOwn && (
						<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 rounded-2xl" />
					)}

					<div className="relative z-10">
						<p className="text-sm leading-relaxed">{message.text}</p>
						<p
							className={cn(
								'text-xs mt-1',
								message.isOwn ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'
							)}
						>
							{message.time}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
