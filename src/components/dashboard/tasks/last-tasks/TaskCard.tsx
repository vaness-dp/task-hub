'use client'

import type { ITask } from '@/types/task.types'

import { TaskActions } from './TaskActions'
import { TaskContent } from './TaskContent'
import { TaskHeader } from './TaskHeader'
import { TaskProgress } from './TaskProgress'
import { TaskStats } from './TaskStats'

interface Props {
	task: ITask
}

// TODO: Вынести декор и эффекты в отдельные компоненты

export function TaskCard({ task }: Props) {
	return (
		<div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/60 dark:bg-neutral-800 border border-white/30 dark:border-neutral-700 cursor-pointer group transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 h-[300px] flex flex-col shadow-lg">
			{/* Gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/10 dark:from-black/20 dark:via-transparent dark:to-black/40 rounded-3xl" />

			{/* Decorative elements */}
			<div className="absolute top-4 right-4 w-6 h-6 bg-white/15 dark:bg-white/10 rounded-xl rotate-12 group-hover:rotate-45 group-hover:bg-white/25 dark:group-hover:bg-white/20 transition-all duration-500 shadow-sm" />
			<div className="absolute bottom-4 left-4 w-4 h-4 bg-white/10 dark:bg-white/8 rounded-full group-hover:scale-125 group-hover:bg-white/20 dark:group-hover:bg-white/15 transition-all duration-300 shadow-sm" />
			<div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/8 dark:bg-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-500" />
			<div className="absolute top-8 left-6 w-2 h-2 bg-white/15 dark:bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-300" />
			<div className="absolute bottom-8 right-8 w-3 h-3 bg-white/12 dark:bg-white/8 rounded-full group-hover:scale-125 transition-transform duration-400" />

			<div className="relative z-10 p-6 flex flex-col h-full">
				<div className="h-[120px] flex flex-col">
					<TaskHeader task={task} />
					<TaskContent task={task} />
				</div>

				<div className="h-[50px] flex items-center">
					<TaskProgress task={task} />
				</div>

				<div className="flex-1" />

				<div className="h-[50px] flex items-center justify-between">
					<TaskStats task={task} />
					<TaskActions />
				</div>
			</div>

			{/* Effect of glowing when hovering */}
			<div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 dark:via-white/8 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-full" />
		</div>
	)
}
