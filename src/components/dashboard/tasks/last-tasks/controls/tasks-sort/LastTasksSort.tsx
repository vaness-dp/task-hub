import * as m from 'framer-motion/m'
import { ArrowDown, ArrowUp } from 'lucide-react'

import { GradientOverlay } from '@/ui/glass/GradientOverlay'

import { taskFilter } from '@/constants/animations/dashboard/task-filter.animations'

import { getButtonStyles } from '@/utils/button.styles'

import type { TTaskFilterValue } from '../task-filter/task-filter.types'

import type { TTaskSortDirection } from './tasks-sort.types'

interface Props {
	isActive: boolean
	value: TTaskFilterValue
	direction: TTaskSortDirection
	onToggle: () => void
}

export function LastTasksSort({ isActive, value, direction, onToggle }: Props) {
	return (
		<div className="flex items-center space-x-2">
			<m.button
				initial="initial"
				whileHover="hover"
				variants={taskFilter.trigger}
				className={getButtonStyles(isActive, value)}
				onClick={onToggle}
				title={direction === 'asc' ? 'ascending' : 'descending'}
			>
				<GradientOverlay
					variant="secondary"
					className="rounded-none"
				/>

				<m.span
					variants={taskFilter.chevron}
					className="relative z-1 flex items-center space-x-1"
				>
					{direction === 'asc' ? (
						<ArrowUp className="w-4.5 h-4.5" />
					) : (
						<ArrowDown className="w-4.5 h-4.5" />
					)}
				</m.span>
			</m.button>
		</div>
	)
}
