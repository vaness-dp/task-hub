import * as m from 'framer-motion/m'
import { Trash2, X } from 'lucide-react'

import { modalField } from '@/constants/animations/modal/modal.animations'

interface Props {
	onConfirm: () => void
	onCancel: () => void
}

export function TaskDeleteActions({ onConfirm, onCancel }: Props) {
	return (
		<m.div
			variants={modalField}
			className="flex items-center justify-center space-x-3"
		>
			<button
				onClick={onCancel}
				className="px-6 py-3 backdrop-blur-xl bg-white/60 dark:bg-white/20 hover:bg-white/80 dark:hover:bg-white/30 border border-white/40 dark:border-white/20 rounded-2xl text-gray-700 dark:text-gray-300 font-medium transition-all duration-200 flex items-center space-x-2"
			>
				<X className="w-4 h-4" />
				<span>Cancel</span>
			</button>

			<button
				onClick={onConfirm}
				className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-2xl font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
			>
				<Trash2 className="w-4 h-4" />
				<span>Delete</span>
			</button>
		</m.div>
	)
}
