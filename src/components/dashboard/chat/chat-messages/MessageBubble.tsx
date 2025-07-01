import cn from 'clsx'

import { OnlineIndicator } from '@/ui/OnlineIndicator'
import { GradientOverlay } from '@/ui/glass/GradientOverlay'
import { InnerGlow } from '@/ui/glass/InnerGlow'

import type { IMessage } from '@/types/messages.types'

import { ChatAvatar } from '../ChatAvatar'

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
				{!message.isOwn && (
					<div className="relative">
						<ChatAvatar
							avatar={message.avatar}
							className="w-8 h-8 flex-shrink-0 text-sm rounded-xl"
						/>
						{message.online && <OnlineIndicator className="w-2.5 h-2.5" />}
					</div>
				)}

				{/* Message */}
				<div
					className={cn(
						'px-4 py-3 rounded-2xl max-w-full relative overflow-hidden',
						message.isOwn
							? 'bg-gradient-to-r from-primary to-primary/90 text-white rounded-br-md shadow-lg'
							: 'backdrop-blur-xl bg-white/60 dark:bg-neutral-800/80 border border-white/30 dark:border-white/10 text-gray-900 dark:text-white rounded-bl-md'
					)}
				>
					{!message.isOwn && <InnerGlow className="rounded-2xl" />}
					{message.isOwn && <GradientOverlay variant="secondary" />}

					<div className="relative z-10">
						<p className="text-sm leading-relaxed">{message.text}</p>
						<p
							className={cn(
								'text-xs mt-1',
								message.isOwn ? 'text-white/80' : 'text-gray-500 dark:text-gray-300'
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
