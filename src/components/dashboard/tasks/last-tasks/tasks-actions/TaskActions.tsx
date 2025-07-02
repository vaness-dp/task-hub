import { Edit, Plus } from 'lucide-react'

import { cn } from '@/utils/styles'

import { ActionButton } from './ActionButton'

interface Props {
	onAddTask?: () => void
	onEditTask?: () => void
	className?: string
}

export function TaskActions({ onAddTask, onEditTask, className }: Props) {
	return (
		<div className={cn('flex items-center space-x-2', className)}>
			<ActionButton
				icon={Plus}
				variant="primary"
				onClick={onAddTask}
			/>
			<ActionButton
				icon={Edit}
				onClick={onEditTask}
			/>
		</div>
	)
}
