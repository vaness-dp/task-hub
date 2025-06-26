import { MoreHorizontal, Phone, Users, Video } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import { ButtonAction } from '@/ui/chat-elements/ButtonAction'

import type { IMessage } from '@/types/messages.types'

import { MOCK_CHAT_HEADER_DATA } from './chat-header.data'

interface Props extends Pick<IMessage, 'chatId'> {
	isSmall?: boolean
}

export function ChatHeader({ chatId, isSmall }: Props) {
	const chat = MOCK_CHAT_HEADER_DATA[chatId as keyof typeof MOCK_CHAT_HEADER_DATA]

	if (!chat) return null

	return (
		<div className={twMerge('p-6 border-b border-neutral', isSmall && 'p-4')}>
			<div className="flex items-center justify-between">
				{/* Chat info */}
				<div className="flex items-center space-x-3">
					<div className="relative">
						<div
							className={twMerge(
								'w-12 h-12 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-600 dark:to-neutral-700 rounded-2xl flex items-center justify-center text-lg',
								isSmall && 'w-10 h-10'
							)}
						>
							{chat.avatar}
						</div>
						{chat.online && (
							<div
								className={twMerge(
									'absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-neutral-800',
									isSmall && 'w-3 h-3'
								)}
							/>
						)}
					</div>

					<div>
						<h2 className={twMerge('font-semibold text-primary-content', isSmall && 'text-sm')}>
							{chat.name}
						</h2>
						<div className="flex items-center space-x-2 text-sm text-secondary-content">
							<span>{chat.role}</span>
							{chat.members > 1 && (
								<>
									<span>•</span>
									<div className="flex items-center space-x-1">
										<Users className="w-3 h-3" />
										<span className={twMerge(isSmall && 'text-xs')}>{chat.members} members</span>
									</div>
								</>
							)}
						</div>
					</div>
				</div>

				{/* Actions */}
				<div className="flex items-center space-x-2">
					<ButtonAction className={twMerge(isSmall && 'w-8 h-8')}>
						<Phone className="icon" />
					</ButtonAction>
					<ButtonAction className={twMerge(isSmall && 'w-8 h-8')}>
						<Video className="icon" />
					</ButtonAction>
					<ButtonAction className={twMerge(isSmall && 'w-8 h-8')}>
						<MoreHorizontal className="icon" />
					</ButtonAction>
				</div>
			</div>
		</div>
	)
}
