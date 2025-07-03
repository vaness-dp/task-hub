import { cn } from '@/utils/styles'

import type { ITask } from '@/types/task.types'

import { STATS_DATA } from '../../../../../../data/last-tasks.data'

import { StatItem } from './StatItem'

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
