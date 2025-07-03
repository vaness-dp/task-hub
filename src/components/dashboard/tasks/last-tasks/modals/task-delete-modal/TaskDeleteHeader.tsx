import * as m from 'framer-motion/m'
import { AlertTriangle } from 'lucide-react'

import { GradientOverlay } from '@/components/ui/glass/GradientOverlay'

import { modalField } from '@/constants/animations/modal/modal.animations'

export function TaskDeleteHeader() {
	return (
		<m.div
			variants={modalField}
			className="flex items-center justify-center mb-6"
		>
			<div className="w-16 h-16 backdrop-blur-xl bg-gradient-to-br from-red-500/80 to-red-600 rounded-full flex items-center justify-center shadow-xl border border-red-400/30 relative overflow-hidden">
				<GradientOverlay
					variant="secondary"
					className="rounded-full"
				/>
				<AlertTriangle className="w-8 h-8 text-white relative z-10" />
			</div>
		</m.div>
	)
}
