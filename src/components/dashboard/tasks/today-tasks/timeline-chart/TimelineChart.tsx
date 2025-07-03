import type { ITodayTask } from '@/types/task.types'

import { TimelineGrid } from './TimelineGrid'

interface Props {
	tasks: ITodayTask[]
}

export function TimelineChart({ tasks }: Props) {
	return (
		<div className="relative h-full min-h-96">
			<TimelineGrid tasks={tasks} />
		</div>
	)
}
