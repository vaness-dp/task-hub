import cn from 'clsx'

import { getFilterStyle } from '@/components/dashboard/tasks/last-tasks/controls/task-filter/task-filter.styles'
import type { TTaskFilterValue } from '@/components/dashboard/tasks/last-tasks/controls/task-filter/task-filter.types'

export const getButtonStyles = (isActive: boolean, value: TTaskFilterValue) =>
	cn(
		'relative overflow-hidden bg-gradient-to-r from-blue-500/80 to-blue-600 text-white rounded-lg px-2 py-1.5 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed',
		isActive && cn('bg-gradient-to-r font-medium', getFilterStyle(true, value))
	)
