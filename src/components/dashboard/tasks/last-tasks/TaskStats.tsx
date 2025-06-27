import { Image, Link, MessageCircle } from 'lucide-react'

import type { ITask } from '@/types/task.types'

interface Props {
	task: ITask
}

export function TaskStats({ task }: Props) {
	return (
		<div className="flex items-center space-x-4">
			<div className="flex items-center space-x-1.5 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
				<MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
				<span className="text-sm font-medium drop-shadow-sm">{task.comments}</span>
			</div>

			<div className="flex items-center space-x-1.5 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
				<Image className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
				<span className="text-sm font-medium drop-shadow-sm">{task.views}</span>
			</div>

			<div className="flex items-center space-x-1.5 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
				<Link className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
				<span className="text-sm font-medium drop-shadow-sm">{task.likes}</span>
			</div>
		</div>
	)
}
