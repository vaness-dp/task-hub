import * as m from 'framer-motion/m'
import { Plane } from 'lucide-react'

import { GradientOverlay } from '@/ui/glass/GradientOverlay'

import { cardAnimations } from '@/constants/animations/dashboard/project-stat-card.animations'

interface Props {
	icon: string
}

export function TodayTaskIcon({ icon }: Props) {
	return (
		<m.div
			variants={cardAnimations.intense}
			className="today-task-icon"
		>
			<GradientOverlay
				variant="quinary"
				className="rounded-2xl"
			/>
			{icon === '✈️' ? (
				<Plane className="w-6 h-6 text-white relative z-10 drop-shadow-sm" />
			) : (
				<span className="text-2xl relative z-10 drop-shadow-sm">{icon}</span>
			)}
		</m.div>
	)
}
