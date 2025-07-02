import cn from 'clsx'
import * as m from 'framer-motion/m'
import Image from 'next/image'

import { InnerGlow } from '@/ui/glass/InnerGlow'

import { cardAnimations } from '@/constants/animations/dashboard/project-stat-card.animations'

import type { IProjectStat } from './projects-stats.types'

interface Props {
	projectStat: IProjectStat
}

export function ProjectStatsImage({ projectStat }: Props) {
	return (
		<div className="flex-shrink-0 ml-4">
			<m.div
				variants={cardAnimations.intense}
				className="image-inner-glow"
			>
				<InnerGlow className="rounded-2xl" />
				<div
					className={cn(
						'absolute inset-0 rounded-2xl opacity-0 dark:opacity-20',
						projectStat.bgColor
					)}
				/>
				<Image
					src={projectStat.icon}
					alt={projectStat.label}
					width={48}
					height={48}
					className="relative z-10"
				/>
			</m.div>
		</div>
	)
}
