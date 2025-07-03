import { useState } from 'react'

import type { TTaskFilterValue } from '@/components/dashboard/tasks/last-tasks/controls/task-filter/task-filter.types'

import type { ITask } from '@/types/task.types'

interface Props {
	initialTasks: ITask[]
}

export function useTasksState({ initialTasks }: Props) {
	const [activeFilter, setActiveFilter] = useState<TTaskFilterValue>('all')
	const [tasksList, setTasksList] = useState<ITask[]>(initialTasks)
	const [deletedTask, setDeletedTask] = useState<ITask | null>(null)

	const addTask = (task: ITask) => {
		setTasksList(prev => [task, ...prev])
	}

	const updateTask = (updatedTask: ITask) => {
		setTasksList(prev => prev.map(task => (task.id === updatedTask.id ? updatedTask : task)))
	}

	const removeTask = (taskId: string) => {
		const taskToDelete = tasksList.find(task => task.id === taskId)
		setTasksList(prev => prev.filter(task => task.id !== taskId))
		return taskToDelete
	}

	const restoreTask = (task: ITask) => {
		setTasksList(prev => [task, ...prev])
		setDeletedTask(null)
	}

	return {
		// State
		tasksList,
		activeFilter,
		deletedTask,

		// Actions
		setActiveFilter,
		setDeletedTask,
		addTask,
		updateTask,
		removeTask,
		restoreTask
	}
}
