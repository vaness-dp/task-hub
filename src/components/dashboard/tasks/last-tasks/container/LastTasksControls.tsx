import type { ITask } from '@/types/task.types'

import { LastTasksFilter } from '../controls/task-filter/LastTasksFilter'
import type { TTaskFilterValue } from '../controls/task-filter/task-filter.types'
import { LastTasksSort } from '../controls/tasks-sort/LastTasksSort'
import type { TTaskSortDirection } from '../controls/tasks-sort/tasks-sort.types'
import { SliderNavigation } from '../slider/tasks-slider/SliderNavigation'

interface Props {
	// Navigation
	totalPages: number
	canSlideLeft: boolean
	canSlideRight: boolean
	onSlide: (direction: 'left' | 'right') => void

	// Filter
	tasks: ITask[]
	activeFilter: TTaskFilterValue
	onFilterChange: (value: TTaskFilterValue) => void

	// Sort
	direction: TTaskSortDirection
	onSortToggle: () => void
}

/**
 * Controls component for LastTasks section
 * Contains navigation, filter and sort controls
 */
export function LastTasksControls({
	totalPages,
	canSlideLeft,
	canSlideRight,
	onSlide,
	tasks,
	activeFilter,
	onFilterChange,
	direction,
	onSortToggle
}: Props) {
	return (
		<div className="flex items-center gap-3">
			<SliderNavigation
				totalPages={totalPages}
				canSlideLeft={canSlideLeft}
				canSlideRight={canSlideRight}
				onSlide={onSlide}
				value={activeFilter}
				isActive={activeFilter !== 'all'}
			/>
			<LastTasksFilter
				tasks={tasks}
				activeFilter={activeFilter}
				onChange={onFilterChange}
			/>
			<LastTasksSort
				direction={direction}
				onToggle={onSortToggle}
				value={activeFilter}
				isActive={activeFilter !== 'all'}
			/>
		</div>
	)
}
