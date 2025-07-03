'use client'

import { cn } from '@/utils/styles'
import { getCardPosition } from '@/utils/timeline'

import type { ITodayTask } from '@/types/task.types'

import { TaskTooltip } from './TaskTooltip'
import type { ITimeSlot } from './timeline.types'

interface Props extends ITimeSlot {
	task: ITodayTask | null
	hoveredSlot: number | null
	onMouseEnter: () => void
	onMouseLeave: () => void
}

export const TimeSlot = ({ index, task, hoveredSlot, onMouseEnter, onMouseLeave }: Props) => {
	const hasTask = task !== null
	const isHovered = hoveredSlot === index

	return (
		<div className="flex-1 relative h-full">
			<div className="absolute inset-0 flex justify-center">
				<div
					className={cn(
						'w-0.5 h-full rounded-full transition-all duration-200',
						hasTask ? 'bg-primary/30 hover:w-1 hover:bg-primary/60' : 'bg-gray-200 dark:bg-gray-600'
					)}
				>
					{hasTask && (
						<div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200" />
					)}
				</div>
			</div>

			<div
				className="absolute inset-0 z-30"
				style={{
					cursor: hasTask ? 'pointer' : 'default',
					left: '-20px',
					right: '-20px'
				}}
				onMouseEnter={hasTask ? onMouseEnter : undefined}
				onMouseLeave={onMouseLeave}
			/>

			{isHovered && task && (
				<TaskTooltip
					task={task}
					index={index}
					position={getCardPosition(index)}
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
				/>
			)}
		</div>
	)
}
