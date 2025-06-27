import type { ITask } from '@/types/task.types'

export const MOCK_LAST_TASKS: ITask[] = [
	{
		id: '1',
		title: 'Travel App',
		subtitle: 'User Flow',
		icon: '✈️',
		dueDate: '3 days',
		team: ['👩‍💼', '👨‍💻', '👩‍🎨'],
		status: 'in-progress',
		comments: 3,
		views: 6,
		likes: 2
	},
	{
		id: '2',
		title: 'Travel App',
		subtitle: 'User Flow',
		icon: '✈️',
		dueDate: 'May',
		team: ['👩‍💼', '👨‍💻', '👩‍🎨'],
		status: 'completed',
		comments: 3,
		views: 6,
		likes: 2
	},
	{
		id: '3',
		title: 'Travel App',
		subtitle: 'User Flow',
		icon: '✈️',
		dueDate: '3 days',
		team: ['👩‍💼', '👨‍💻', '👩‍🎨'],
		status: 'review',
		comments: 3,
		views: 6,
		likes: 2
	}
]
