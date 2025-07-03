import { useEffect, useState } from 'react'

import type { ITask } from '@/types/task.types'

interface Props {
	sortedTasks: ITask[]
	goToTaskPage: (taskId: string) => void
}

export function useTaskNavigation({ sortedTasks, goToTaskPage }: Props) {
	const [newlyCreatedTaskId, setNewlyCreatedTaskId] = useState<string | null>(null)

	useEffect(() => {
		if (newlyCreatedTaskId && sortedTasks.some(task => task.id === newlyCreatedTaskId)) {
			goToTaskPage(newlyCreatedTaskId)
			setNewlyCreatedTaskId(null)
		}
	}, [sortedTasks, newlyCreatedTaskId, goToTaskPage])

	const scheduleNavigationToTask = (taskId: string) => {
		setNewlyCreatedTaskId(taskId)
	}

	return {
		scheduleNavigationToTask
	}
}
