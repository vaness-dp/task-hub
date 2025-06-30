import { twMerge } from 'tailwind-merge'

import { InnerGlow } from '@/ui/glass/InnerGlow'

import type { IMessage } from '@/types/messages.types'

interface Props extends Pick<IMessage, 'chatId'> {
	isSmall?: boolean
	avatar: string
	className?: string
}

export function ChatAvatar({ isSmall, avatar, className }: Props) {
	return (
		<div
			className={twMerge(
				'w-12 h-12 backdrop-blur-sm bg-white/80 dark:bg-white/20 border border-gray-200 dark:border-white/20 rounded-2xl flex items-center justify-center text-lg relative overflow-hidden shadow-sm',
				isSmall && 'w-10 h-10',
				className
			)}
		>
			<InnerGlow className="rounded-2xl" />
			<span className="relative z-10">{avatar}</span>
		</div>
	)
}
