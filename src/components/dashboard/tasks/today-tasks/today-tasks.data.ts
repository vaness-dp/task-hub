import type { ITodayTask } from '@/types/task.types'

export const MOCK_TODAY_TASKS: ITodayTask[] = [
	{
		id: '1',
		title: 'Meeting with John',
		icon: '👨‍💼',
		timeRange: '10:00 - 12:00',
		startTime: 10,
		duration: 2,
		color: 'bg-primary',
		team: ['👩‍💼', '👨‍💻', '👩‍🎨', '👨‍🔬', '👩‍🚀', '👨‍🎨', '👩‍💻', '👨‍💻', '👩‍🎨', '👨‍🔬', '👩‍🚀', '👨‍🎨', '👩‍💻']
	},

	{
		id: '2',
		title: 'Design System',
		icon: '🎨',
		timeRange: '12:00 - 14:00',
		startTime: 12,
		duration: 2,
		color: 'bg-pink-300',
		team: ['👩‍💼', '👨‍💻', '👩‍🎨', '👨‍🔬', '👩‍🚀', '👨‍🎨', '👩‍💻', '👨‍💻', '👩‍🎨', '👨‍🔬', '👩‍🚀', '👨‍🎨', '👩‍💻']
	},
	{
		id: '3',
		title: 'UI/UX Design',
		icon: '👨‍💻',
		timeRange: '14:00 - 16:00',
		startTime: 14,
		duration: 2,
		color: 'bg-violet-300',
		team: ['👨‍💻', '👩‍🎨', '👨‍🔬', '👩‍🚀', '👨‍🎨', '👩‍💻']
	}
]

export const TEAM_MEMBERS_DATA = [
	'👩‍💼',
	'👨‍💻',
	'👩‍🎨',
	'👨‍🔬',
	'👩‍🚀',
	'👨‍🎨',
	'👩‍💻',
	'👨‍💻',
	'👩‍🎨',
	'👨‍🔬',
	'👩‍🚀',
	'👨‍🎨',
	'👩‍💻'
]

export const TIME_SLOTS_DATA = [
	'9 am',
	'10 am',
	'11 am',
	'12 pm',
	'1 pm',
	'2 pm',
	'3 pm',
	'4 pm',
	'5 pm'
] as const
