import { useMemo } from 'react'

import { useClickOutside } from '@/hooks/useClickOutside'

import type { ITaskFilterProps, TTaskFilterValue } from './task-filter.types'
import { TASK_FILTERS_DATA } from '@/data/last-tasks.data'

export function useTaskFilter(
	tasks: ITaskFilterProps['tasks'],
	activeFilter: ITaskFilterProps['activeFilter'],
	onChange: ITaskFilterProps['onChange']
) {
	const { isOpen, setIsOpen, ref } = useClickOutside()

	const activeFilterData = useMemo(
		() => TASK_FILTERS_DATA.find(filter => filter.value === activeFilter),
		[activeFilter]
	)

	const statusCount = useMemo(() => {
		return tasks.reduce(
			(acc, task) => {
				const status = task.status as TTaskFilterValue
				acc[status] = (acc[status] || 0) + 1
				return acc
			},
			{} as Record<TTaskFilterValue, number>
		)
	}, [tasks])

	const handleFilterChange = (value: TTaskFilterValue) => {
		onChange(value)
		setIsOpen(false)
	}

	return {
		isOpen,
		setIsOpen,
		activeFilterData,
		statusCount,
		handleFilterChange,
		ref
	}
}
