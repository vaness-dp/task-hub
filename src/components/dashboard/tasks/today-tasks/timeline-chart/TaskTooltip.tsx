import { TIMELINE_CONFIG } from '@/constants/timeline.constants'

import type { ITodayTask } from '@/types/task.types'

import { TodayTaskCard } from '../today-task-card/TodayTaskCard'

import type { ICardPosition } from './timeline.types'

interface TaskTooltipProps {
	task: ITodayTask
	index: number
	position: ICardPosition
	onMouseEnter: () => void
	onMouseLeave: () => void
}

export const TaskTooltip = ({
	task,
	index,
	position,
	onMouseEnter,
	onMouseLeave
}: TaskTooltipProps) => {
	return (
		<div
			className="absolute z-[60] pointer-events-none"
			style={{
				top: `${TIMELINE_CONFIG.CARD_TOP_OFFSET}px`,
				width: `${TIMELINE_CONFIG.CARD_WIDTH}px`,
				...position
			}}
		>
			<div
				className="pointer-events-auto"
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<TodayTaskCard
					task={task}
					index={index}
				/>
			</div>
		</div>
	)
}
