import { useMemo, useState } from 'react'

import type { ITask } from '@/types/task.types'

import { LastTasksFilter } from './task-filter/LastTasksFilter'
import type { TTaskFilterValue } from './task-filter/task-filter.types'
import { LastTasksSlider } from './tasks-slider/LastTasksSlider'
import { SliderNavigation } from './tasks-slider/SliderNavigation'
import { useLastTasksSlider } from './tasks-slider/useLastTasksSlider'
import { LastTasksSort } from './tasks-sort/LastTasksSort'
import { useLastTasksSort } from './tasks-sort/useLastTasksSort'

interface Props {
	tasks: ITask[]
}

export function LastTasks({ tasks }: Props) {
	const [activeFilter, setActiveFilter] = useState<TTaskFilterValue>('all')

	const filteredTasks = useMemo(() => {
		if (activeFilter === 'all') return tasks
		return tasks.filter(task => task.status === activeFilter)
	}, [tasks, activeFilter])

	const { direction, sortedTasks, toggleSort } = useLastTasksSort(filteredTasks)

	const { currentIndex, totalPages, canSlideLeft, canSlideRight, handleSlide } = useLastTasksSlider(
		{
			tasks: sortedTasks
		}
	)

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-2">
					<h2 className="text-xl font-semibold text-gray-900 dark:text-white">Last Tasks</h2>
					<span className="text-lg text-gray-500 dark:text-gray-400">({sortedTasks.length})</span>
				</div>

				<div className="flex items-center gap-3">
					<SliderNavigation
						totalPages={totalPages}
						canSlideLeft={canSlideLeft}
						canSlideRight={canSlideRight}
						onSlide={handleSlide}
						value={activeFilter}
						isActive={activeFilter !== 'all'}
					/>
					<LastTasksFilter
						tasks={tasks}
						activeFilter={activeFilter}
						onChange={setActiveFilter}
					/>
					<LastTasksSort
						direction={direction}
						onToggle={toggleSort}
						value={activeFilter}
						isActive={activeFilter !== 'all'}
					/>
				</div>
			</div>

			<LastTasksSlider
				tasks={sortedTasks}
				currentIndex={currentIndex}
				activeFilter={activeFilter}
			/>
		</div>
	)
}
