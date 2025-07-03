import type { TTaskFilterValue } from '@/components/dashboard/tasks/last-tasks/controls/task-filter/task-filter.types'

import type { ITask } from '@/types/task.types'

interface Props {
	setActiveFilter: (value: TTaskFilterValue) => void
	removeTask: (taskId: string) => ITask | undefined
	setDeletedTask: (task: ITask) => void
	restoreTask: (task: ITask) => void
	onTaskDeleted?: (taskId: string) => void
	resetToFirstPage: () => void
	toggleSort: () => void
	openCreateModal: () => void
	showDeleteNotification: (title: string) => void
	hideNotification: () => void
	deletedTask: ITask | null
}

export function useLastTasksHandlers({
	setActiveFilter,
	removeTask,
	setDeletedTask,
	restoreTask,
	onTaskDeleted,
	resetToFirstPage,
	toggleSort,
	openCreateModal,
	showDeleteNotification,
	hideNotification,
	deletedTask
}: Props) {
	const handleFilterChange = (value: TTaskFilterValue) => {
		setActiveFilter(value)
		resetToFirstPage()
	}

	const handleSortToggle = () => {
		toggleSort()
		resetToFirstPage()
	}

	const handleCreateTask = () => {
		openCreateModal()
	}

	const handleTaskDeleted = (taskId: string) => {
		const deletedTask = removeTask(taskId)
		if (deletedTask) {
			setDeletedTask(deletedTask)
			showDeleteNotification(deletedTask.title)
		}
		onTaskDeleted?.(taskId)
	}

	const handleUndoDelete = () => {
		if (deletedTask) {
			restoreTask(deletedTask)
			hideNotification()
		}
	}

	return {
		handleFilterChange,
		handleSortToggle,
		handleCreateTask,
		handleTaskDeleted,
		handleUndoDelete
	}
}
