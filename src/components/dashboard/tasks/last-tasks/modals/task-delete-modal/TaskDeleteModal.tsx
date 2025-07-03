'use client'

import { Modal } from '@/components/ui/modal/Modal'

import type { ITask } from '@/types/task.types'

import { TaskDeleteActions } from './TaskDeleteActions'
import { TaskDeleteContent } from './TaskDeleteContent'
import { TaskDeleteHeader } from './TaskDeleteHeader'

interface Props {
	isOpen: boolean
	task: ITask | null
	onConfirm: () => void
	onCancel: () => void
}

export function TaskDeleteModal({ isOpen, task, onConfirm, onCancel }: Props) {
	if (!task) return null

	return (
		<Modal
			isOpen={isOpen}
			onClose={onCancel}
			size="sm"
			backdropOpacity="dark"
		>
			<div className="p-6">
				<TaskDeleteHeader />
				<TaskDeleteContent task={task} />
				<TaskDeleteActions
					onConfirm={onConfirm}
					onCancel={onCancel}
				/>
			</div>
		</Modal>
	)
}
