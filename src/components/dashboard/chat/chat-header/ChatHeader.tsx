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
		<div
			className={twMerge(
				'p-6 border-b border-white/30 dark:border-white/10 backdrop-blur-xl bg-white/20 dark:bg-white/3 relative overflow-hidden',
				isSmall && 'p-4'
			)}
		>
			{/* Effects */}
			<div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/8 dark:from-white/5 dark:to-transparent" />
			<div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent" />

			<div className="flex items-center justify-between relative z-10">
				{/* Chat info */}
				<div className="flex items-center space-x-3">
					<div className="relative">
						<div
							className={twMerge(
								'w-12 h-12 backdrop-blur-sm bg-white/60 dark:bg-white/20 border border-white/30 dark:border-white/20 rounded-2xl flex items-center justify-center text-lg relative overflow-hidden',
								isSmall && 'w-10 h-10'
							)}
						>
							<div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 rounded-2xl" />
							<span className="relative z-10">{chat.avatar}</span>
						</div>
						{chat.online && (
							<div
								className={twMerge(
									'absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white/50 dark:border-black/30',
									isSmall && 'w-3 h-3'
								)}
							/>
						)}
					</div>

					<div>
						<h2
							className={twMerge(
								'font-semibold text-gray-900 dark:text-white',
								isSmall && 'text-sm'
							)}
						>
							{chat.name}
						</h2>
						<div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
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
