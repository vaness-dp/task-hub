import { useEffect, useState } from 'react'

import type { ITask } from '@/types/task.types'

interface Props {
	tasks: ITask[]
	itemsPerPage?: number
}

export function useLastTasksSlider({ tasks, itemsPerPage = 3 }: Props) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const totalPages = Math.ceil(tasks.length / itemsPerPage)
	const canSlideLeft = currentIndex > 0
	const canSlideRight = currentIndex < totalPages - 1

	useEffect(() => {
		if (currentIndex >= totalPages && totalPages > 0) {
			setCurrentIndex(0)
		}
	}, [currentIndex, totalPages])

	const handleSlide = (direction: 'left' | 'right') => {
		setCurrentIndex(prev => {
			if (direction === 'left' && canSlideLeft) return prev - 1
			if (direction === 'right' && canSlideRight) return prev + 1
			return prev
		})
	}

	const resetToFirstPage = () => setCurrentIndex(0)

	const goToTaskPage = (taskId: string) => {
		const taskIndex = tasks.findIndex(task => task.id === taskId)
		if (taskIndex !== -1) {
			const pageIndex = Math.floor(taskIndex / itemsPerPage)
			setCurrentIndex(pageIndex)
		}
	}

	return {
		currentIndex,
		totalPages,
		canSlideLeft,
		canSlideRight,
		handleSlide,
		resetToFirstPage,
		goToTaskPage
	}
}
