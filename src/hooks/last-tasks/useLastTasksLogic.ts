import { useMemo } from 'react'

import { useLastTasksSort } from '@/components/dashboard/tasks/last-tasks/controls/tasks-sort/useLastTasksSort'
import { useLastTasksSlider } from '@/components/dashboard/tasks/last-tasks/slider/tasks-slider/useLastTasksSlider'

import type { ITask } from '@/types/task.types'

import { useLastTasksHandlers } from './useLastTasksHandlers'
import { useTaskNavigation } from './useTaskNavigation'
import { useTasksCRUD } from './useTasksCRUD'
import { useTasksState } from './useTasksState'

interface Props {
	tasks: ITask[]
	onTaskCreated?: (task: ITask) => void
	onTaskDeleted?: (taskId: string) => void
}

export function useLastTasksLogic({ tasks, onTaskCreated, onTaskDeleted }: Props) {
	const tasksState = useTasksState({ initialTasks: tasks })

	const filteredTasks = useMemo(() => {
		if (tasksState.activeFilter === 'all') return tasksState.tasksList
		return tasksState.tasksList.filter(task => task.status === tasksState.activeFilter)
	}, [tasksState.tasksList, tasksState.activeFilter])

	const { direction, sortedTasks, toggleSort } = useLastTasksSort(filteredTasks)

	const slider = useLastTasksSlider({ tasks: sortedTasks })

	const navigation = useTaskNavigation({
		sortedTasks,
		goToTaskPage: slider.goToTaskPage
	})

	const crud = useTasksCRUD({
		onTaskCreated,
		onTaskDeleted,
		onTaskAdded: task => {
			tasksState.addTask(task)
			tasksState.setActiveFilter('all')
		},
		onTaskUpdated: tasksState.updateTask,
		onTaskRemoved: tasksState.removeTask,
		onNavigationScheduled: navigation.scheduleNavigationToTask,
		onDeletedTaskSet: tasksState.setDeletedTask
	})

	const handlers = useLastTasksHandlers({
		setActiveFilter: tasksState.setActiveFilter,
		removeTask: tasksState.removeTask,
		setDeletedTask: tasksState.setDeletedTask,
		restoreTask: tasksState.restoreTask,
		onTaskDeleted,
		resetToFirstPage: slider.resetToFirstPage,
		toggleSort,
		openCreateModal: crud.taskManager.openCreateModal,
		showDeleteNotification: crud.showDeleteNotification,
		hideNotification: crud.hideNotification,
		deletedTask: tasksState.deletedTask
	})

	return {
		// State
		tasksList: tasksState.tasksList,
		deletedTask: tasksState.deletedTask,
		activeFilter: tasksState.activeFilter,

		// Computed
		filteredTasks,
		sortedTasks,

		// Task Manager
		taskManager: crud.taskManager,

		// Notification
		notification: crud.notification,
		hideNotification: crud.hideNotification,

		// Slider
		currentIndex: slider.currentIndex,
		totalPages: slider.totalPages,
		canSlideLeft: slider.canSlideLeft,
		canSlideRight: slider.canSlideRight,

		// Sort
		direction,

		// Handlers
		handleFilterChange: handlers.handleFilterChange,
		handleSortToggle: handlers.handleSortToggle,
		handleCreateTask: handlers.handleCreateTask,
		handleTaskDeleted: handlers.handleTaskDeleted,
		handleUndoDelete: handlers.handleUndoDelete,
		handleSlide: slider.handleSlide,
		goToTaskPage: slider.goToTaskPage
	}
}
