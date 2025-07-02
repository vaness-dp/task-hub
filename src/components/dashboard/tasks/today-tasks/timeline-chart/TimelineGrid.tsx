'use client'

import cn from 'clsx'
import { useRef, useState } from 'react'

import type { ITodayTask } from '@/types/task.types'

import { TodayTaskCard } from '../today-task-card/TodayTaskCard'

const TIME_SLOTS = ['9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm']

interface Props {
	tasks: ITodayTask[]
}

export const TimelineGrid = ({ tasks }: Props) => {
	const [hoveredSlot, setHoveredSlot] = useState<number | null>(null)
	const containerRef = useRef<HTMLDivElement>(null)

	const getTaskForSlot = (slotIndex: number): ITodayTask | null => {
		return tasks[slotIndex] || null
	}

	const getCardPosition = (index: number) => {
		const totalSlots = TIME_SLOTS.length

		if (index === 0) {
			return { left: '20px', transform: 'none' }
		} else if (index === totalSlots - 1) {
			return { right: '20px', transform: 'none' }
		} else if (index === 1) {
			return { left: '50%', transform: 'translateX(-30%)' }
		} else if (index === totalSlots - 2) {
			return { left: '50%', transform: 'translateX(-70%)' }
		} else {
			return { left: '50%', transform: 'translateX(-50%)' }
		}
	}

	return (
		<div
			ref={containerRef}
			className="relative w-full h-full"
		>
			<div className="flex text-sm text-gray-600 dark:text-gray-400 px-4 mb-6">
				{TIME_SLOTS.map(time => (
					<div
						key={time}
						className="flex-1 text-center"
					>
						<span className="font-medium">{time}</span>
					</div>
				))}
			</div>

			<div
				className="relative w-full"
				style={{ height: 'calc(100% - 60px)', minHeight: '300px' }}
			>
				<div className="flex h-full px-4 relative">
					{TIME_SLOTS.map((_, index) => {
						const task = getTaskForSlot(index)
						const hasTask = task !== null

						return (
							<div
								key={index}
								className="flex-1 relative h-full"
							>
								<div className="absolute inset-0 flex justify-center">
									<div
										className={cn(
											'w-0.5 h-full rounded-full transition-all duration-200',
											hasTask
												? 'bg-primary/30 hover:w-1 hover:bg-primary/60'
												: 'bg-gray-200 dark:bg-gray-600'
										)}
									>
										{hasTask && (
											<div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200" />
										)}
									</div>
								</div>

								<div
									className="absolute inset-0 z-10"
									style={{
										cursor: hasTask ? 'pointer' : 'default',
										left: '-20px',
										right: '-20px'
									}}
									onMouseEnter={() => hasTask && setHoveredSlot(index)}
									onMouseLeave={() => setHoveredSlot(null)}
								/>

								{hoveredSlot === index && task && (
									<div
										className="absolute z-50 pointer-events-none"
										style={{
											top: '80px',
											width: '280px',
											...getCardPosition(index)
										}}
									>
										<div
											className="pointer-events-auto"
											onMouseEnter={() => setHoveredSlot(index)}
											onMouseLeave={() => setHoveredSlot(null)}
										>
											<TodayTaskCard
												task={task}
												index={index}
											/>
										</div>
									</div>
								)}
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
