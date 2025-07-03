import * as m from 'framer-motion/m'

import { modalForm } from '@/constants/animations/modal/modal.animations'

import type { TTaskModalMode } from '@/hooks/last-tasks/useTaskModalState'

import type { ITask } from '@/types/task.types'

import { TaskEditActions } from './TaskEditActions'
import { TaskEditFormFields } from './TaskEditFormFields'
import { useTaskEditForm } from './useTaskEditForm'

interface Props {
	task: ITask
	mode: TTaskModalMode
	onSave: (updatedTask: ITask) => void
	onCancel: () => void
}

export function TaskEditForm({ task, mode, onSave, onCancel }: Props) {
	const { formData, isLoading, hasChanges, handleFieldChange, handleSave } = useTaskEditForm({
		task,
		mode,
		onSave
	})

	return (
		<m.form
			variants={modalForm}
			className="flex flex-col h-full"
			onSubmit={e => {
				e.preventDefault()
				handleSave()
			}}
		>
			<TaskEditFormFields
				formData={formData}
				onFieldChange={handleFieldChange}
			/>

			<TaskEditActions
				mode={mode}
				onSave={handleSave}
				onCancel={onCancel}
				isLoading={isLoading}
				hasChanges={hasChanges}
			/>
		</m.form>
	)
}
