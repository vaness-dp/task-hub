import cn from 'clsx'

import type { ITask } from '@/types/task.types'

import { StatItem } from './StatItem'
import { STATS_DATA } from './task-stats.data'

interface Props {
	task: ITask
	className?: string
}

export function TaskStats({ task, className }: Props) {
	return (
		<div className={cn('flex items-center space-x-4', className)}>
			{STATS_DATA.map(({ icon, key }) => (
				<StatItem
					key={key}
					icon={icon}
					value={task[key]}
				/>
			))}
		</div>
	)
}
