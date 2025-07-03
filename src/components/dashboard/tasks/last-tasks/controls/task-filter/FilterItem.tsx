import * as m from 'framer-motion/m'

import { GradientOverlay } from '@/ui/glass/GradientOverlay'

import { taskFilter } from '@/constants/animations/dashboard/task-filter.animations'

import { cn } from '@/utils/styles'

import { getFilterStyle } from './task-filter.styles'
import type { TTaskFilterValue } from './task-filter.types'

interface Props {
	label: string
	value: TTaskFilterValue
	count: number
	index: number
	isActive: boolean
	onClick: () => void
}

export function FilterItem({ label, value, count, index, isActive, onClick }: Props) {
	return (
		<m.button
			custom={index}
			initial="initial"
			animate="open"
			whileHover="hover"
			variants={taskFilter.item}
			onClick={onClick}
			className={cn(
				'task-filter-item',
				isActive
					? cn('bg-gradient-to-r text-white font-medium', getFilterStyle(true, value))
					: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-white/5'
			)}
		>
			{isActive && (
				<GradientOverlay
					variant="secondary"
					className="absolute inset-0 opacity-100 rounded-none"
				/>
			)}
			<span className="relative z-1">{label}</span>
			<m.span
				variants={taskFilter.count}
				className={cn(
					'relative z-1 text-xs font-medium px-2 py-1 rounded-lg',
					isActive ? 'bg-white/20' : 'bg-gray-100 dark:bg-white/10'
				)}
			>
				{count}
			</m.span>
		</m.button>
	)
}
