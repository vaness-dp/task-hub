import * as m from 'framer-motion/m'
import { ChevronDown } from 'lucide-react'

import { GradientOverlay } from '@/ui/glass/GradientOverlay'

import { taskFilter } from '@/constants/animations/dashboard/task-filter.animations'

import { cn } from '@/utils/styles'

import { getFilterStyle } from './task-filter.styles'
import type { TTaskFilterValue } from './task-filter.types'

interface Props {
	label: string
	value: TTaskFilterValue
	isOpen: boolean
	onClick: () => void
}

export function FilterTrigger({ label, value, isOpen, onClick }: Props) {
	const activeStyle = getFilterStyle(true, value)

	return (
		<m.button
			initial="initial"
			whileHover="hover"
			animate={isOpen ? 'open' : 'initial'}
			onClick={onClick}
			variants={taskFilter.trigger}
			className={cn(
				'task-filter-trigger',
				activeStyle || 'from-gray-500/20 to-gray-600/20 dark:from-gray-600/40 dark:to-gray-700/40',
				'text-white font-medium text-sm'
			)}
		>
			<div className="absolute inset-0 w-full">
				<GradientOverlay
					variant="secondary"
					className="rounded-none"
				/>
			</div>

			<span className="relative z-1">{label}</span>
			<m.span
				variants={taskFilter.chevron}
				className="relative z-1"
			>
				<ChevronDown className="w-3.5 h-3.5" />
			</m.span>
		</m.button>
	)
}
