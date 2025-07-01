import type { ITask } from '@/types/task.types'

export type TTaskFilterValue = 'all' | 'in-progress' | 'review' | 'completed'

export interface ITaskFilter {
	label: string
	value: TTaskFilterValue
}

export interface ITaskFilterProps {
	tasks: ITask[]
	activeFilter: TTaskFilterValue
	onChange: (value: TTaskFilterValue) => void
}
