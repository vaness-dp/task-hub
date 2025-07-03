import type { ITask } from '@/types/task.types'

import { LastTasksContainer } from './container/LastTasksContainer'

interface Props {
	tasks: ITask[]
	onTaskCreated?: (task: ITask) => void
	onTaskDeleted?: (taskId: string) => void
}

export function LastTasks({ tasks, onTaskCreated, onTaskDeleted }: Props) {
	return (
		<LastTasksContainer
			tasks={tasks}
			onTaskCreated={onTaskCreated}
			onTaskDeleted={onTaskDeleted}
		/>
	)
}
