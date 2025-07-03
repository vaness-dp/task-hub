import { Check, Copy, Edit, Plus, Save } from 'lucide-react'

import type { TTaskModalMode } from '@/hooks/last-tasks/useTaskModalState'

export const TASK_MODAL_MODE_CONFIG = {
	edit: {
		saveText: 'Save Changes',
		saveIcon: Save,
		loadingText: 'Saving...'
	},
	create: {
		saveText: 'Create Task',
		saveIcon: Plus,
		loadingText: 'Creating...'
	},
	duplicate: {
		saveText: 'Create Copy',
		saveIcon: Check,
		loadingText: 'Creating...'
	}
} as const satisfies Record<
	TTaskModalMode,
	{
		saveText: string
		saveIcon: any
		loadingText: string
	}
>

export const TASK_MODAL_HEADER_CONFIG = {
	edit: {
		icon: Edit,
		title: 'Edit Task',
		subtitle: (taskTitle: string) => taskTitle
	},
	create: {
		icon: Plus,
		title: 'Create New Task',
		subtitle: () => 'Fill in the details below'
	},
	duplicate: {
		icon: Copy,
		title: 'Duplicate Task',
		subtitle: (taskTitle: string) => `Based on "${taskTitle}"`
	}
} as const satisfies Record<
	TTaskModalMode,
	{
		icon: any
		title: string
		subtitle: (taskTitle: string) => string
	}
>
