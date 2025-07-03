import type { ITodayTask } from '@/types/task.types'

export interface ICardPosition {
	left?: string
	right?: string
	transform: string
}

export interface ITimeSlot {
	index: number
	task: ITodayTask | null
	hoveredSlot: number | null
	onMouseEnter: () => void
	onMouseLeave: () => void
}
