'use client'

import { TIMELINE_CONFIG, TIME_SLOTS } from '@/constants/timeline.constants'

import { getTaskForSlot } from '@/utils/timeline'

import type { ITodayTask } from '@/types/task.types'

import { TimeSlot } from './TimeSlot'
import { TimelineHeader } from './TimelineHeader'
import { useTimeline } from './useTimeline'

interface TimelineGridProps {
	tasks: ITodayTask[]
}

export const TimelineGrid = ({ tasks }: TimelineGridProps) => {
	const { hoveredSlot, containerRef, handleSlotMouseEnter, handleSlotMouseLeave } = useTimeline()

	return (
		<div
			ref={containerRef}
			className="relative w-full h-full"
		>
			<TimelineHeader />

			<div
				className="relative w-full"
				style={{
					height: `calc(100% - ${TIMELINE_CONFIG.HEADER_HEIGHT}px)`,
					minHeight: `${TIMELINE_CONFIG.MIN_HEIGHT}px`
				}}
			>
				<div className="flex h-full px-4 relative">
					{TIME_SLOTS.map((_, index) => {
						const task = getTaskForSlot(tasks, index)

						return (
							<TimeSlot
								key={index}
								index={index}
								task={task}
								hoveredSlot={hoveredSlot}
								onMouseEnter={() => handleSlotMouseEnter(index)}
								onMouseLeave={handleSlotMouseLeave}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}
