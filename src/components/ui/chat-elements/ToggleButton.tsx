import * as m from 'framer-motion/m'
import type { LucideIcon } from 'lucide-react'

import { cn } from '@/utils/styles'

interface Props {
	icon: LucideIcon
	isOpen: boolean
	onClick: () => void
	position: 'left' | 'right'
	tooltip: string
}

export function ToggleButton({ icon: Icon, isOpen, onClick, position, tooltip }: Props) {
	return (
		<button
			onClick={onClick}
			title={tooltip}
			className={cn(
				'group relative p-3 rounded-xl backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-neutral-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105',
				isOpen ? 'text-primary dark:text-primary' : 'text-gray-600 dark:text-gray-400'
			)}
		>
			<m.div
				animate={{
					rotate: isOpen ? 0 : 180
				}}
				transition={{
					duration: 0.5,
					ease: 'easeInOut'
				}}
			>
				<Icon size={20} />
			</m.div>

			<div
				className={cn(
					'absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 px-3 py-2 text-sm font-medium bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg shadow-lg pointer-events-none whitespace-nowrap z-50',
					position === 'left'
						? 'top-1/2 -translate-y-1/2 left-full ml-3'
						: 'top-1/2 -translate-y-1/2 right-full mr-3'
				)}
			>
				{tooltip}
				<div
					className={cn(
						'absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-100 rotate-45',
						position === 'left' ? '-left-1' : '-right-1'
					)}
				/>
			</div>
		</button>
	)
}
