import { Users } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import { OnlineIndicator } from '@/ui/OnlineIndicator'

import type { IMessage } from '@/types/messages.types'

import { ChatAvatar } from '../ChatAvatar'

import { ButtonActions } from './ButtonActions'
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
				'p-6 border-b border-gray-200 dark:border-white/10 backdrop-blur-xl bg-white/40 dark:bg-white/3 relative overflow-hidden',
				isSmall && 'p-4'
			)}
		>
			<div className="flex items-center justify-between relative z-10">
				{/* Chat info */}
				<div className="flex items-center space-x-3">
					<div className="relative">
						<ChatAvatar
							isSmall={isSmall}
							avatar={chat.avatar}
						/>
						{chat.online && <OnlineIndicator />}
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
				<ButtonActions isSmall={isSmall} />
			</div>
		</div>
	)
}
