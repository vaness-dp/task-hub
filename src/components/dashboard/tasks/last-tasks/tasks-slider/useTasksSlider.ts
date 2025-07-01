import { useState } from 'react'

import type { ITask } from '@/types/task.types'

interface Props {
	tasks: ITask[]
	itemsPerPage?: number
}

export function useTasksSlider({ tasks, itemsPerPage = 3 }: Props) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const totalPages = Math.ceil(tasks.length / itemsPerPage)
	const canSlideLeft = currentIndex > 0
	const canSlideRight = currentIndex < totalPages - 1

	const handleSlide = (direction: 'left' | 'right') => {
		setCurrentIndex(prev => {
			if (direction === 'left' && canSlideLeft) return prev - 1
			if (direction === 'right' && canSlideRight) return prev + 1
			return prev
		})
	}

	return {
		currentIndex,
		totalPages,
		canSlideLeft,
		canSlideRight,
		handleSlide
	}
}
