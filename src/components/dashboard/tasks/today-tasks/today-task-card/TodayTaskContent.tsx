import * as m from 'framer-motion/m'

import { cardAnimations } from '@/constants/animations/dashboard/project-stat-card.animations'

interface Props {
	title: string
	timeRange: string
}

export function TodayTaskContent({ title, timeRange }: Props) {
	return (
		<div className="text-white min-w-0 flex-1">
			<m.h3
				variants={cardAnimations.subtle}
				className="text-lg font-semibold leading-tight drop-shadow-sm mb-2"
			>
				{title}
			</m.h3>
			<p className="text-sm opacity-90 drop-shadow-sm">{timeRange}</p>
		</div>
	)
}
