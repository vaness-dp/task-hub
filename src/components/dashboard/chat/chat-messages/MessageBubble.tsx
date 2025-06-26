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
					<div className="w-8 h-8 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-600 dark:to-neutral-700 rounded-xl flex items-center justify-center text-sm flex-shrink-0">
						{message.avatar}
					</div>
				)}

				{/* Message */}
				<div
					className={cn(
						'px-4 py-3 rounded-2xl max-w-full',
						message.isOwn
							? 'bg-primary text-white rounded-br-md'
							: 'bg-neutral-100 dark:bg-neutral-700 text-primary-content rounded-bl-md'
					)}
				>
					<p className="text-sm leading-relaxed">{message.text}</p>
					<p
						className={cn(
							'text-xs mt-1',
							message.isOwn ? 'text-white/70' : 'text-secondary-content'
						)}
					>
						{message.time}
					</p>
				</div>
			</div>
		</div>
	)
}
