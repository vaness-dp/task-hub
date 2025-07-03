import { AnimatePresence } from 'framer-motion'
import * as m from 'framer-motion/m'
import { CheckCircle, Undo, X } from 'lucide-react'

import { GradientOverlay } from '@/components/ui/glass/GradientOverlay'
import { InnerGlow } from '@/components/ui/glass/InnerGlow'

import { deleteNotification } from '@/constants/animations/dashboard/task-delete.animations'

interface Props {
	isVisible: boolean
	taskTitle: string
	onUndo?: () => void
	onClose: () => void
}

export function DeleteNotification({ isVisible, taskTitle, onUndo, onClose }: Props) {
	return (
		<AnimatePresence>
			{isVisible && (
				<m.div
					variants={deleteNotification}
					initial="initial"
					animate="show"
					exit="hide"
					className="fixed bottom-6 right-6 z-50 w-96"
				>
					<div className="backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border border-white/30 dark:border-white/20 rounded-2xl shadow-2xl relative overflow-hidden">
						{/* Glass Effects */}
						<GradientOverlay
							variant="tertiary"
							className="rounded-2xl"
						/>
						<InnerGlow className="rounded-2xl" />

						{/* Content */}
						<div className="relative z-10 p-4 flex items-center space-x-3">
							{/* Success Icon */}
							<div className="w-10 h-10 backdrop-blur-xl bg-gradient-to-br from-green-500/80 to-green-600 rounded-full flex items-center justify-center shadow-lg border border-green-400/30 relative overflow-hidden flex-shrink-0">
								<GradientOverlay
									variant="secondary"
									className="rounded-full"
								/>
								<CheckCircle className="w-5 h-5 text-white relative z-10" />
							</div>

							{/* Message */}
							<div className="flex-1 min-w-0">
								<p className="text-sm font-medium text-gray-900 dark:text-white">Task deleted</p>
								<p className="text-xs text-gray-600 dark:text-gray-400 truncate">
									"{taskTitle}" was removed
								</p>
							</div>

							{/* Actions */}
							<div className="flex items-center space-x-2 flex-shrink-0">
								{onUndo && (
									<button
										onClick={onUndo}
										className="flex items-center space-x-1 px-3 py-1.5 bg-white/60 dark:bg-white/20 hover:bg-white/80 dark:hover:bg-white/30 border border-white/40 dark:border-white/20 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 transition-all duration-200"
									>
										<Undo className="w-3 h-3" />
										<span>Undo</span>
									</button>
								)}

								<button
									onClick={onClose}
									className="w-7 h-7 backdrop-blur-xl bg-white/40 dark:bg-white/20 hover:bg-white/60 dark:hover:bg-white/30 border border-white/30 dark:border-white/20 rounded-lg flex items-center justify-center transition-all duration-200"
								>
									<X className="w-3 h-3 text-gray-500 dark:text-gray-400" />
								</button>
							</div>
						</div>
					</div>
				</m.div>
			)}
		</AnimatePresence>
	)
}
