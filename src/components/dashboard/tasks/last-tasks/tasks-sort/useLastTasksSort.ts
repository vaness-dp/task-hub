import { useMemo, useState } from 'react'

import type { ITask } from '@/types/task.types'

import type { TTaskSortDirection } from './tasks-sort.types'

export const useLastTasksSort = (tasks: ITask[]) => {
	const [direction, setDirection] = useState<TTaskSortDirection>('asc')

	const sortedTasks = useMemo(
		() =>
			[...tasks].sort((a, b) => {
				const aDate = new Date(a.dueDate).getTime()
				const bDate = new Date(b.dueDate).getTime()
				return direction === 'asc' ? aDate - bDate : bDate - aDate
			}),
		[tasks, direction]
	)

	const toggleSort = () => setDirection(prev => (prev === 'asc' ? 'desc' : 'asc'))

	return { sortedTasks, direction, toggleSort }
}
