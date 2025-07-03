import * as m from 'framer-motion/m'
import { X } from 'lucide-react'

import { modalField } from '@/constants/animations/modal/modal.animations'

import { TASK_MODAL_MODE_CONFIG } from '@/config/task.config'

import type { TTaskModalMode } from '@/hooks/last-tasks/useTaskModalState'

interface Props {
	mode: TTaskModalMode
	onSave: () => void
	onCancel: () => void
	isLoading?: boolean
	hasChanges?: boolean
}

export function TaskEditActions({
	mode,
	onSave,
	onCancel,
	isLoading = false,
	hasChanges = false
}: Props) {
	const config = TASK_MODAL_MODE_CONFIG[mode]
	const SaveIcon = config.saveIcon

	// Для режимов создания и дублирования всегда показываем активную кнопку
	const canSave = mode === 'edit' ? hasChanges : true

	return (
		<m.div
			variants={modalField}
			className="flex items-center justify-end space-x-3 p-6 border-t border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5"
		>
			<button
				onClick={onCancel}
				disabled={isLoading}
				className="px-6 py-3 backdrop-blur-xl bg-white/40 dark:bg-white/20 hover:bg-white/60 dark:hover:bg-white/30 border border-white/30 dark:border-white/20 rounded-2xl text-gray-700 dark:text-gray-300 font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 relative overflow-hidden group"
			>
				<X className="w-4 h-4" />
				<span>Cancel</span>
			</button>

			<button
				onClick={onSave}
				disabled={isLoading || !canSave}
				className="px-6 py-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white rounded-2xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 shadow-lg hover:shadow-xl relative overflow-hidden"
			>
				{isLoading ? (
					<>
						<div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
						<span>{config.loadingText}</span>
					</>
				) : (
					<>
						<SaveIcon className="w-4 h-4" />
						<span>{config.saveText}</span>
					</>
				)}
			</button>
		</m.div>
	)
}
