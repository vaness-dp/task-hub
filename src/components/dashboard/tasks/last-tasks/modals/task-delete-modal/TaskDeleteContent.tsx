import * as m from 'framer-motion/m'

import { modalField } from '@/constants/animations/modal/modal.animations'

import type { ITask } from '@/types/task.types'

interface Props {
	task: ITask
}

export function TaskDeleteContent({ task }: Props) {
	return (
		<m.div
			variants={modalField}
			className="text-center mb-6"
		>
			<h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Delete Task</h2>
			<p className="text-gray-600 dark:text-gray-400 mb-1">Are you sure you want to delete</p>
			<p className="font-medium text-gray-900 dark:text-white">"{task.title}"?</p>
			<p className="text-sm text-red-600 dark:text-red-400 mt-2">This action cannot be undone.</p>
		</m.div>
	)
}
