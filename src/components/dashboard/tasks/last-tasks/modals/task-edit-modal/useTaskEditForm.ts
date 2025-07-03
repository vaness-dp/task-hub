import { useEffect, useState } from 'react'

import type { TTaskModalMode } from '@/hooks/last-tasks/useTaskModalState'

import type { ITask } from '@/types/task.types'

interface IUseTaskEditFormOptions {
	task: ITask
	mode: TTaskModalMode
	onSave: (updatedTask: ITask) => void
}

interface IUseTaskEditFormReturn {
	formData: ITask
	isLoading: boolean
	hasChanges: boolean
	handleFieldChange: (field: keyof ITask, value: string | number) => void
	handleSave: () => Promise<void>
}

export function useTaskEditForm({
	task,
	mode,
	onSave
}: IUseTaskEditFormOptions): IUseTaskEditFormReturn {
	const [formData, setFormData] = useState<ITask>(task)
	const [isLoading, setIsLoading] = useState(false)
	const [hasChanges, setHasChanges] = useState(false)

	// Check for changes
	useEffect(() => {
		const changed = JSON.stringify(formData) !== JSON.stringify(task)
		setHasChanges(changed)
	}, [formData, task])

	// Reset form when task changes
	useEffect(() => {
		setFormData(task)
		setHasChanges(false)
	}, [task])

	const handleFieldChange = (field: keyof ITask, value: string | number) => {
		setFormData(prev => ({
			...prev,
			[field]: value
		}))
	}

	const handleSave = async () => {
		if (mode === 'edit' && !hasChanges) return

		setIsLoading(true)

		try {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1000))
			onSave(formData)
		} catch (error) {
			console.error('Failed to save task:', error)
		} finally {
			setIsLoading(false)
		}
	}

	return {
		formData,
		isLoading,
		hasChanges,
		handleFieldChange,
		handleSave
	}
}
