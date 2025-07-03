import type { TTaskModalMode } from '@/hooks/last-tasks/useTaskModalState'

import type { ITask } from '@/types/task.types'

import { TaskDeleteModal } from '../modals/task-delete-modal/TaskDeleteModal'
import { TaskEditModal } from '../modals/task-edit-modal/TaskEditModal'

interface Props {
	isEditModalOpen: boolean
	currentTask: ITask | null
	modalMode: TTaskModalMode
	onEditModalClose: () => void
	onSaveTask: (task: ITask) => Promise<void>
	isDeleteModalOpen: boolean
	taskToDelete: ITask | null
	onDeleteConfirm: () => Promise<void>
	onDeleteModalClose: () => void
}

export function TaskCardModals({
	isEditModalOpen,
	currentTask,
	modalMode,
	onEditModalClose,
	onSaveTask,
	isDeleteModalOpen,
	taskToDelete,
	onDeleteConfirm,
	onDeleteModalClose
}: Props) {
	return (
		<>
			{/* Edit/Create/Duplicate Modal */}
			<TaskEditModal
				isOpen={isEditModalOpen}
				task={currentTask}
				mode={modalMode}
				onClose={onEditModalClose}
				onSave={onSaveTask}
			/>

			{/* Delete Confirmation Modal */}
			<TaskDeleteModal
				isOpen={isDeleteModalOpen}
				task={taskToDelete}
				onConfirm={onDeleteConfirm}
				onCancel={onDeleteModalClose}
			/>
		</>
	)
}
