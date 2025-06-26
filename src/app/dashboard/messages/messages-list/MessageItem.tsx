import cn from 'clsx'

import type { IChat } from '../../../../types/messages.types'

interface Props {
	chat: IChat
	isSelected: boolean
	onClick: () => void
}

export function MessageItem({ chat, isSelected, onClick }: Props) {
	return (
		<button
			onClick={onClick}
			className={`w-full p-3 rounded-2xl text-left transition-all hover:bg-neutral-50 dark:hover:bg-neutral-700 ${
				isSelected ? 'bg-primary text-white hover:bg-primary/90' : 'text-primary-content'
			}`}
		>
			<div className="flex items-start space-x-3">
				{/* Avatar */}
				<div className="relative">
					<div className="w-12 h-12 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-600 dark:to-neutral-700 rounded-2xl flex items-center justify-center text-lg">
						{chat.avatar}
					</div>
					{chat.online && (
						<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-neutral-800"></div>
					)}
				</div>

				{/* Content */}
				<div className="flex-1 min-w-0">
					<div className="flex items-center justify-between mb-1">
						<h3
							className={cn(
								'font-medium text-sm truncate',
								isSelected ? 'text-white' : 'text-primary-content'
							)}
						>
							{chat.name}
						</h3>
						<span
							className={cn('text-xs', isSelected ? 'text-white/70' : 'text-secondary-content')}
						>
							{chat.time}
						</span>
					</div>

					<p
						className={cn('text-xs mb-1', isSelected ? 'text-white/70' : 'text-secondary-content')}
					>
						{chat.role}
					</p>

					<div className="flex items-center justify-between">
						<p
							className={`text-sm truncate ${
								isSelected ? 'text-white/80' : 'text-neutral-600 dark:text-neutral-300'
							}`}
						>
							{chat.lastMessage}
						</p>
						{chat.unread > 0 && (
							<div
								className={cn(
									'ml-2 px-2 py-1 rounded-full text-xs font-medium',
									isSelected ? 'bg-white text-primary' : 'bg-primary text-white'
								)}
							>
								{chat.unread}
							</div>
						)}
					</div>
				</div>
			</div>
		</button>
	)
}
