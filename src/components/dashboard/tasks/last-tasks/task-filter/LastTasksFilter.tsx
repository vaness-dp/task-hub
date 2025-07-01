import * as m from 'framer-motion/m'

import { taskFilter } from '@/constants/animations/dashboard/task-filter.animations'

import { TASK_FILTERS_DATA } from '../last-tasks.data'

import { FilterItem } from './FilterItem'
import { FilterTrigger } from './FilterTrigger'
import type { ITaskFilterProps } from './task-filter.types'
import { useTaskFilter } from './useTaskFilter'

export function LastTasksFilter({ tasks, activeFilter, onChange }: ITaskFilterProps) {
	const { isOpen, setIsOpen, activeFilterData, statusCount, handleFilterChange, ref } =
		useTaskFilter(tasks, activeFilter, onChange)

	if (!activeFilterData) return null

	return (
		<div
			className="relative inline-block"
			ref={ref}
		>
			<FilterTrigger
				label={activeFilterData.label}
				value={activeFilter}
				isOpen={isOpen}
				onClick={() => setIsOpen(!isOpen)}
			/>

			<m.div
				initial="initial"
				animate={isOpen ? 'open' : 'closed'}
				variants={taskFilter.menu}
				className="task-filter-menu"
			>
				<div className="divide-y divide-gray-100/50 dark:divide-white/5">
					{TASK_FILTERS_DATA.map((filter, index) => {
						const isActive = activeFilter === filter.value
						const count = filter.value === 'all' ? tasks.length : statusCount[filter.value] || 0

						return (
							<FilterItem
								key={filter.value}
								label={filter.label}
								value={filter.value}
								count={count}
								index={index}
								isActive={isActive}
								onClick={() => handleFilterChange(filter.value)}
							/>
						)
					})}
				</div>
			</m.div>
		</div>
	)
}
