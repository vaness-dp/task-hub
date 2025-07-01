import cn from 'clsx'
import * as m from 'framer-motion/m'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { GradientOverlay } from '@/ui/glass/GradientOverlay'

import { taskFilter } from '@/constants/animations/dashboard/task-filter.animations'

import { getFilterStyle } from '../task-filter/task-filter.styles'
import type { TTaskFilterValue } from '../task-filter/task-filter.types'

interface Props {
	totalPages: number
	canSlideLeft: boolean
	canSlideRight: boolean
	value: TTaskFilterValue
	isActive: boolean
	onSlide: (direction: 'left' | 'right') => void
}

export function SliderNavigation({
	totalPages,
	canSlideLeft,
	canSlideRight,
	value,
	isActive,
	onSlide
}: Props) {
	if (totalPages <= 1) return null

	const baseStyles = cn(
		'relative overflow-hidden bg-gradient-to-r from-blue-500/80 to-blue-600 text-white rounded-lg px-2 py-1.5 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed',
		isActive && cn('bg-gradient-to-r font-medium', getFilterStyle(true, value))
	)

	return (
		<div className="flex items-center gap-2">
			<m.button
				initial="initial"
				whileHover={canSlideLeft ? 'hover' : undefined}
				variants={taskFilter.trigger}
				onClick={() => onSlide('left')}
				disabled={!canSlideLeft}
				className={baseStyles}
			>
				<GradientOverlay
					variant="secondary"
					className="rounded-none"
				/>
				<m.span
					variants={taskFilter.chevron}
					className="relative z-1"
				>
					<ChevronLeft className="w-4.5 h-4.5" />
				</m.span>
			</m.button>

			<m.button
				initial="initial"
				whileHover={canSlideRight ? 'hover' : undefined}
				variants={taskFilter.trigger}
				onClick={() => onSlide('right')}
				disabled={!canSlideRight}
				className={baseStyles}
			>
				<GradientOverlay
					variant="secondary"
					className="rounded-none"
				/>

				<m.span
					variants={taskFilter.chevron}
					className="relative z-1"
				>
					<ChevronRight className="w-4.5 h-4.5" />
				</m.span>
			</m.button>
		</div>
	)
}
