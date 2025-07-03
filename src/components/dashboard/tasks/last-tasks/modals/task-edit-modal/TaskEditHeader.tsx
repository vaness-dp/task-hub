import * as m from 'framer-motion/m'
import { X } from 'lucide-react'

import { GradientOverlay } from '@/components/ui/glass/GradientOverlay'

import { modalField } from '@/constants/animations/modal/modal.animations'

import { TASK_MODAL_HEADER_CONFIG } from '@/config/task.config'

import type { TTaskModalMode } from '@/hooks/last-tasks/useTaskModalState'

interface Props {
	taskTitle: string
	mode: TTaskModalMode
	onClose: () => void
}

export function TaskEditHeader({ taskTitle, mode, onClose }: Props) {
	const config = TASK_MODAL_HEADER_CONFIG[mode]
	const IconComponent = config.icon

	return (
		<m.div
			variants={modalField}
			className="flex items-center justify-between p-6 border-b border-white/20 dark:border-white/10"
		>
			<div className="flex items-center space-x-3">
				<div className="w-10 h-10 backdrop-blur-xl bg-gradient-to-br from-primary/80 to-primary rounded-2xl flex items-center justify-center shadow-lg border border-white/30 dark:border-white/20 relative overflow-hidden">
					<GradientOverlay
						variant="secondary"
						className="rounded-2xl"
					/>
					<IconComponent className="w-5 h-5 text-white relative z-10" />
				</div>
				<div>
					<h2 className="text-xl font-semibold text-gray-900 dark:text-white">{config.title}</h2>
					<p className="text-sm text-gray-500 dark:text-gray-400">{config.subtitle(taskTitle)}</p>
				</div>
			</div>

			<button
				onClick={onClose}
				className="w-10 h-10 backdrop-blur-xl bg-white/40 dark:bg-white/20 hover:bg-white/60 dark:hover:bg-white/30 border border-white/30 dark:border-white/20 rounded-2xl flex items-center justify-center transition-all duration-200 relative overflow-hidden group"
			>
				<GradientOverlay
					variant="tertiary"
					className="rounded-2xl"
				/>
				<X className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 relative z-10 transition-colors duration-200" />
			</button>
		</m.div>
	)
}
