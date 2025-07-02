import type { ITask } from '@/types/task.types'

import type { ITaskFilter } from './task-filter/task-filter.types'

export const MOCK_LAST_TASKS: ITask[] = [
	{
		id: '1',
		title: 'Travel App',
		subtitle: 'User Flow',
		icon: '✈️',
		dueDate: '2025-07-18',
		team: ['👩‍💼', '👨‍💻', '👩‍🎨'],
		status: 'in-progress',
		comments: 3,
		images: 2,
		links: 6
	},
	{
		id: '2',
		title: 'Travel App',
		subtitle: 'User Flow',
		icon: '✈️',
		dueDate: '2025-07-15',
		team: ['👩‍💼', '👨‍💻', '👩‍🎨'],
		status: 'completed',
		comments: 3,
		images: 2,
		links: 6
	},
	{
		id: '3',
		title: 'Travel App',
		subtitle: 'User Flow',
		icon: '✈️',
		dueDate: '2025-07-18',
		team: ['👩‍💼', '👨‍💻', '👩‍🎨'],
		status: 'review',
		comments: 3,
		images: 2,
		links: 6
	},
	{
		id: '4',
		title: 'E-Commerce Platform',
		subtitle: 'Checkout Redesign',
		icon: '🛒',
		dueDate: '2025-01-20',
		team: ['👨‍💻', '👩‍💼'],
		status: 'in-progress',
		comments: 5,
		images: 4,
		links: 12
	},
	{
		id: '5',
		title: 'Fitness App',
		subtitle: 'Dark Mode UI',
		icon: '💪',
		dueDate: '2025-06-17',
		team: ['👨‍🎨', '👩‍💼', '👨‍💻'],
		status: 'completed',
		comments: 2,
		images: 1,
		links: 8
	},
	{
		id: '6',
		title: 'Portfolio Website',
		subtitle: 'Mobile Responsiveness',
		icon: '🌐',
		dueDate: '2025-06-16',
		team: ['👨‍💻'],
		status: 'review',
		comments: 1,
		images: 3,
		links: 10
	},
	{
		id: '7',
		title: 'AI Chatbot',
		subtitle: 'Training Dataset',
		icon: '🤖',
		dueDate: '2025-05-22',
		team: ['👩‍💼', '👨‍💻'],
		status: 'completed',
		comments: 4,
		images: 7,
		links: 15
	},
	{
		id: '8',
		title: 'Event Management System',
		subtitle: 'Calendar Integration',
		icon: '📆',
		dueDate: '2025-07-19',
		team: ['👨‍💻', '👩‍🎨'],
		status: 'in-progress',
		comments: 3,
		images: 2,
		links: 11
	},
	{
		id: '9',
		title: 'Dashboard UI',
		subtitle: 'Refactor Components',
		icon: '🧩',
		dueDate: '2025-08-17',
		team: ['👨‍💻', '👩‍🎨'],
		status: 'in-progress',
		comments: 6,
		images: 5,
		links: 18
	},
	{
		id: '10',
		title: 'Landing Page',
		subtitle: 'Add Scroll Animations',
		icon: '🎯',
		dueDate: '2025-06-16',
		team: ['👨‍🎨'],
		status: 'in-progress',
		comments: 1,
		images: 2,
		links: 7
	},
	{
		id: '11',
		title: 'UI Kit',
		subtitle: 'Create Button Variants',
		icon: '🎨',
		dueDate: '2025-07-18',
		team: ['👩‍🎨', '👨‍💻'],
		status: 'review',
		comments: 4,
		images: 3,
		links: 10
	},
	{
		id: '12',
		title: 'Responsive Design',
		subtitle: 'Tablet & Mobile Layouts',
		icon: '📱',
		dueDate: '2025-09-19',
		team: ['👨‍💻'],
		status: 'in-progress',
		comments: 2,
		images: 1,
		links: 9
	},
	{
		id: '13',
		title: 'API Integration',
		subtitle: 'Render Dynamic Data',
		icon: '🔗',
		dueDate: '2025-06-17',
		team: ['👨‍💻', '👩‍💼'],
		status: 'completed',
		comments: 5,
		images: 6,
		links: 14
	}
]

export const TASK_FILTERS_DATA: ITaskFilter[] = [
	{
		label: 'All',
		value: 'all'
	},
	{
		label: 'In Progress',
		value: 'in-progress'
	},
	{
		label: 'Review',
		value: 'review'
	},
	{
		label: 'Completed',
		value: 'completed'
	}
]
