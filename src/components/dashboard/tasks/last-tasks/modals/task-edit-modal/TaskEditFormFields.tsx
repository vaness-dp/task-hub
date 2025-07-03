import type { ITask } from '@/types/task.types'

import { TaskEditField } from './TaskEditField'
import { TaskEditSelect } from './TaskEditSelect'

interface Props {
	formData: ITask
	onFieldChange: (field: keyof ITask, value: string | number) => void
}

export function TaskEditFormFields({ formData, onFieldChange }: Props) {
	return (
		<div className="flex-1 p-6 space-y-6 overflow-y-auto">
			<div className="grid grid-cols-2 gap-4">
				<TaskEditField
					label="Task Title"
					value={formData.title}
					onChange={value => onFieldChange('title', value)}
					placeholder="Enter task title"
					required
				/>
				<TaskEditField
					label="Subtitle"
					value={formData.subtitle}
					onChange={value => onFieldChange('subtitle', value)}
					placeholder="Enter subtitle"
				/>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<TaskEditSelect
					label="Status"
					value={formData.status}
					onChange={value => onFieldChange('status', value as ITask['status'])}
					required
				/>
				<TaskEditField
					label="Due Date"
					type="date"
					value={formData.dueDate}
					onChange={value => onFieldChange('dueDate', value)}
					required
				/>
			</div>

			<TaskEditField
				label="Icon"
				value={formData.icon}
				onChange={value => onFieldChange('icon', value)}
				placeholder="🎯"
			/>
		</div>
	)
}
