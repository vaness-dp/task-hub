import cn from 'clsx'

import type { WithClassName } from '@/types/common'

interface Props extends WithClassName {
	isSmall?: boolean
}

export function OnlineIndicator({ isSmall, className }: Props) {
	return (
		<div
			className={cn(
				'absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white/30 dark:border-black/20 backdrop-blur-sm overflow-hidden',
				isSmall && 'w-4 h-4',
				className
			)}
		/>
	)
}
