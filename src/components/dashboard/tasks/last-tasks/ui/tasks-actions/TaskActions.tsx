import { Edit, Plus, Trash2 } from 'lucide-react'

import { cn } from '@/utils/styles'

import { ActionButton } from './ActionButton'

interface Props {
	onAddTask?: () => void
	onEditTask?: () => void
	onDeleteTask?: () => void
	className?: string
}

export function TaskActions({ onAddTask, onEditTask, onDeleteTask, className }: Props) {
	return (
		<div className={cn('flex items-center space-x-2', className)}>
			<ActionButton
				icon={Plus}
				variant="primary"
				onClick={onAddTask}
				title="Duplicate task"
			/>
			<ActionButton
				icon={Edit}
				onClick={onEditTask}
				title="Edit task"
			/>
			<ActionButton
				icon={Trash2}
				variant="danger"
				onClick={onDeleteTask}
				title="Delete task"
			/>
		</div>
	)
}
