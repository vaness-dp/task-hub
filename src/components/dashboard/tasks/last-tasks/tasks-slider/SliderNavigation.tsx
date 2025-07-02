import * as m from 'framer-motion/m'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { GradientOverlay } from '@/ui/glass/GradientOverlay'

import { taskFilter } from '@/constants/animations/dashboard/task-filter.animations'

import { getButtonStyles } from '@/utils/button.styles'

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

	return (
		<div className="flex items-center gap-2">
			<m.button
				initial="initial"
				whileHover={canSlideLeft ? 'hover' : undefined}
				variants={taskFilter.trigger}
				onClick={() => onSlide('left')}
				disabled={!canSlideLeft}
				className={getButtonStyles(isActive, value)}
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
				className={getButtonStyles(isActive, value)}
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
