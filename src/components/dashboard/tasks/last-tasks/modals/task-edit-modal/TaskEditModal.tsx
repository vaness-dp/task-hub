'use client'

import { Modal } from '@/components/ui/modal/Modal'

import type { TTaskModalMode } from '@/hooks/last-tasks/useTaskModalState'

import type { ITask } from '@/types/task.types'

import { TaskEditForm } from './TaskEditForm'
import { TaskEditHeader } from './TaskEditHeader'

interface Props {
	isOpen: boolean
	task: ITask | null
	mode: TTaskModalMode
	onClose: () => void
	onSave: (updatedTask: ITask) => void
}

export function TaskEditModal({ isOpen, task, mode, onClose, onSave }: Props) {
	if (!task) return null

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			size="lg"
			backdropOpacity="medium"
		>
			<div className="flex flex-col h-full max-h-[90vh]">
				<TaskEditHeader
					taskTitle={task.title}
					mode={mode}
					onClose={onClose}
				/>

				<TaskEditForm
					task={task}
					mode={mode}
					onSave={updatedTask => {
						onSave(updatedTask)
						onClose()
					}}
					onCancel={onClose}
				/>
			</div>
		</Modal>
	)
}
