'use client'

import type { ITask } from '@/types/task.types'

import { TaskCardContent } from './TaskCardContent'
import { TaskCardModals } from './TaskCardModals'
import { useTaskCard } from './useTaskCard'

interface Props {
	task: ITask
	onTaskDeleted?: (taskId: string) => void
	onTaskDuplicated?: (task: ITask) => void
	onTaskEdit?: (task: ITask) => void
}

export function TaskCard({ task, onTaskDeleted, onTaskDuplicated, onTaskEdit }: Props) {
	const { taskManager, handleEditTask, handleDuplicateTask, handleDeleteTask } = useTaskCard({
		task,
		onTaskDeleted,
		onTaskDuplicated,
		onTaskEdit
	})

	return (
		<>
			<TaskCardContent
				task={task}
				onEditTask={handleEditTask}
				onDuplicateTask={handleDuplicateTask}
				onDeleteTask={handleDeleteTask}
			/>

			<TaskCardModals
				isEditModalOpen={taskManager.isModalOpen}
				currentTask={taskManager.currentTask}
				modalMode={taskManager.modalMode}
				onEditModalClose={taskManager.closeModal}
				onSaveTask={taskManager.saveTask}
				isDeleteModalOpen={taskManager.isDeleteModalOpen}
				taskToDelete={taskManager.taskToDelete}
				onDeleteConfirm={taskManager.confirmDelete}
				onDeleteModalClose={taskManager.closeDeleteModal}
			/>
		</>
	)
}
