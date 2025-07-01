import type { TTaskFilterValue } from './task-filter.types'

export const getFilterStyle = (isActive: boolean, value: TTaskFilterValue) => {
	if (!isActive) return ''

	switch (value) {
		case 'all':
			return 'from-blue-500/80 to-blue-600'
		case 'completed':
			return 'from-emerald-400 to-emerald-500'
		case 'in-progress':
			return 'from-violet-400 to-purple-500'
		case 'review':
			return 'from-rose-400 to-pink-500'
		default:
			return 'from-gray-400 to-gray-500'
	}
}
