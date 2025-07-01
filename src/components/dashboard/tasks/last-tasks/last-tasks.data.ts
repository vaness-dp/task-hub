import type { ITask } from '@/types/task.types'

import type { ITaskFilter } from './task-filter/task-filter.types'

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
	},
	{
		id: '4',
		title: 'E-Commerce Platform',
		subtitle: 'Checkout Redesign',
		icon: '🛒',
		dueDate: '5 days',
		team: ['👨‍💻', '👩‍💼'],
		status: 'in-progress',
		comments: 5,
		views: 12,
		likes: 4
	},
	{
		id: '5',
		title: 'Fitness App',
		subtitle: 'Dark Mode UI',
		icon: '💪',
		dueDate: '2 days',
		team: ['👨‍🎨', '👩‍💼', '👨‍💻'],
		status: 'completed',
		comments: 2,
		views: 8,
		likes: 1
	},
	{
		id: '6',
		title: 'Portfolio Website',
		subtitle: 'Mobile Responsiveness',
		icon: '🌐',
		dueDate: '1 day',
		team: ['👨‍💻'],
		status: 'review',
		comments: 1,
		views: 10,
		likes: 3
	},
	{
		id: '7',
		title: 'AI Chatbot',
		subtitle: 'Training Dataset',
		icon: '🤖',
		dueDate: '7 days',
		team: ['👩‍💼', '👨‍💻'],
		status: 'completed',
		comments: 4,
		views: 15,
		likes: 7
	},
	{
		id: '8',
		title: 'Event Management System',
		subtitle: 'Calendar Integration',
		icon: '📆',
		dueDate: '4 days',
		team: ['👨‍💻', '👩‍🎨'],
		status: 'in-progress',
		comments: 3,
		views: 11,
		likes: 2
	},
	{
		id: '9',
		title: 'Dashboard UI',
		subtitle: 'Refactor Components',
		icon: '🧩',
		dueDate: '2 days',
		team: ['👨‍💻', '👩‍🎨'],
		status: 'in-progress',
		comments: 6,
		views: 18,
		likes: 5
	},
	{
		id: '10',
		title: 'Landing Page',
		subtitle: 'Add Scroll Animations',
		icon: '🎯',
		dueDate: '1 day',
		team: ['👨‍🎨'],
		status: 'in-progress',
		comments: 1,
		views: 7,
		likes: 2
	},
	{
		id: '11',
		title: 'UI Kit',
		subtitle: 'Create Button Variants',
		icon: '🎨',
		dueDate: '3 days',
		team: ['👩‍🎨', '👨‍💻'],
		status: 'review',
		comments: 4,
		views: 10,
		likes: 3
	},
	{
		id: '12',
		title: 'Responsive Design',
		subtitle: 'Tablet & Mobile Layouts',
		icon: '📱',
		dueDate: '4 days',
		team: ['👨‍💻'],
		status: 'in-progress',
		comments: 2,
		views: 9,
		likes: 1
	},
	{
		id: '13',
		title: 'API Integration',
		subtitle: 'Render Dynamic Data',
		icon: '🔗',
		dueDate: '2 days',
		team: ['👨‍💻', '👩‍💼'],
		status: 'completed',
		comments: 5,
		views: 14,
		likes: 6
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
