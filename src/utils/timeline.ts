import type { ICardPosition } from '@/components/dashboard/tasks/today-tasks/timeline-chart/timeline.types'

import { TIMELINE_CONFIG, TIME_SLOTS } from '@/constants/timeline.constants'

export const getCardPosition = (index: number): ICardPosition => {
	const totalSlots = TIME_SLOTS.length
	const { SIDE_PADDING } = TIMELINE_CONFIG

	if (index === 0) {
		return { left: `${SIDE_PADDING}px`, transform: 'none' }
	}

	if (index === totalSlots - 1) {
		return { right: `${SIDE_PADDING}px`, transform: 'none' }
	}

	if (index === 1) {
		return { left: '50%', transform: 'translateX(-30%)' }
	}

	if (index === totalSlots - 2) {
		return { left: '50%', transform: 'translateX(-70%)' }
	}

	return { left: '50%', transform: 'translateX(-50%)' }
}

export const getTaskForSlot = <T>(tasks: T[], slotIndex: number): T | null => {
	return tasks[slotIndex] || null
}
