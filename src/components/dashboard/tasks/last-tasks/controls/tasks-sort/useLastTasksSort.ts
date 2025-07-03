import { useMemo, useState } from 'react'

import type { ITask } from '@/types/task.types'

import type { TTaskSortDirection } from './tasks-sort.types'

export function useLastTasksSort(tasks: ITask[]) {
	const [direction, setDirection] = useState<TTaskSortDirection>('asc')

	const sortedTasks = useMemo(
		() =>
			[...tasks].sort((a, b) => {
				const aHasCreatedAt = !!a.createdAt
				const bHasCreatedAt = !!b.createdAt

				if (aHasCreatedAt && !bHasCreatedAt) return -1
				if (!aHasCreatedAt && bHasCreatedAt) return 1

				if (aHasCreatedAt && bHasCreatedAt) {
					const aCreated = new Date(a.createdAt!).getTime()
					const bCreated = new Date(b.createdAt!).getTime()
					return bCreated - aCreated
				}

				const aDate = new Date(a.dueDate).getTime()
				const bDate = new Date(b.dueDate).getTime()
				return direction === 'asc' ? aDate - bDate : bDate - aDate
			}),
		[tasks, direction]
	)

	const toggleSort = () => setDirection(prev => (prev === 'asc' ? 'desc' : 'asc'))

	return { sortedTasks, direction, toggleSort }
}
