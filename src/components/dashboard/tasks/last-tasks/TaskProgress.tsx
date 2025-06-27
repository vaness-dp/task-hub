import { Check } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import type { ITask } from '@/types/task.types'

import { getStatusConfig } from './status.config'

interface Props {
	task: ITask
}

export function TaskProgress({ task }: Props) {
	const statusConfig = getStatusConfig(task.status)

	if (statusConfig.progress > 0 && statusConfig.progress < 100) {
		return (
			<div className="w-full">
				<div className="w-full h-10 bg-gray-100 dark:bg-neutral-700 rounded-2xl overflow-hidden border border-gray-200 dark:border-neutral-600 relative shadow-inner">
					<div
						className={twMerge(
							'h-full rounded-2xl transition-all duration-500 ease-out flex items-center justify-center text-white font-semibold text-sm relative overflow-hidden',
							`bg-gradient-to-r ${statusConfig.bg}`,
							`shadow-lg ${statusConfig.glow}`
						)}
						style={{ width: `${statusConfig.progress}%` }}
					>
						<div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 rounded-2xl" />
						<span className="relative z-10 drop-shadow-sm">{statusConfig.text}</span>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div
			className={twMerge(
				'w-full h-10 rounded-2xl text-white text-sm font-semibold text-center transition-all duration-300 ease-out relative overflow-hidden border border-white/30 flex items-center justify-center space-x-2',
				`bg-gradient-to-r ${statusConfig.bg}`,
				`shadow-lg ${statusConfig.glow}`
			)}
		>
			<div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 rounded-2xl" />
			{statusConfig.text === 'Done' && (
				<div className="w-4 h-4 bg-white/25 rounded-sm border border-white/40 flex items-center justify-center relative z-10 shadow-sm">
					<Check className="w-3 h-3 text-white drop-shadow-sm" />
				</div>
			)}
			<span className="relative z-10 drop-shadow-sm">{statusConfig.text}</span>
		</div>
	)
}
