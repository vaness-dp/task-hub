import type { ITask } from '@/types/task.types'

//  Generates a unique task ID

export function generateTaskId(): string {
	return `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

//  Gets today's date in YYYY-MM-DD format

export function getTodayDate(): string {
	const today = new Date()
	return today.toISOString().split('T')[0]
}

//  Gets tomorrow's date in YYYY-MM-DD format

export function getTomorrowDate(): string {
	const tomorrow = new Date()
	tomorrow.setDate(tomorrow.getDate() + 1)
	return tomorrow.toISOString().split('T')[0]
}

//  Creates a duplicate task based on the original

export function duplicateTask(originalTask: ITask): ITask {
	return {
		...originalTask,
		id: generateTaskId(),
		title: `Copy of ${originalTask.title}`,
		status: 'todo',
		dueDate: getTodayDate(),
		createdAt: new Date().toISOString(),
		comments: 0,
		images: 0,
		links: 0
	}
}

//  Creates a new empty task template

export function createEmptyTask(): ITask {
	return {
		id: generateTaskId(),
		title: 'New Task',
		subtitle: '',
		icon: '📝',
		dueDate: getTodayDate(),
		createdAt: new Date().toISOString(),
		team: [],
		status: 'todo',
		comments: 0,
		images: 0,
		links: 0
	}
}

//  Validates if task data is complete for saving

export function validateTask(task: ITask): { isValid: boolean; errors: string[] } {
	const errors: string[] = []

	if (!task.title.trim()) {
		errors.push('Title is required')
	}

	if (!task.dueDate) {
		errors.push('Due date is required')
	}

	if (!task.icon.trim()) {
		errors.push('Icon is required')
	}

	return {
		isValid: errors.length === 0,
		errors
	}
}
