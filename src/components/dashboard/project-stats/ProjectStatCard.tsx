import cn from 'clsx'
import * as m from 'framer-motion/m'

import { GradientOverlay } from '@/ui/glass/GradientOverlay'
import { InnerGlow } from '@/ui/glass/InnerGlow'

import { cardAnimations } from '@/constants/animations/dashboard/project-stat-card.animations'

import { formatMinutes } from '@/utils/format-minutes'

import { ProjectStatsImage } from './ProjectStatsImage'
import type { IProjectStat } from './projects-stats.types'

interface Props {
	projectStat: IProjectStat
}

export function ProjectStatCard({ projectStat }: Props) {
	return (
		<m.div
			initial="initial"
			whileHover="hover"
			variants={cardAnimations.basic}
			className="project-stats-card"
		>
			{/* Background color */}
			<div
				className={cn(
					'absolute inset-0 rounded-3xl opacity-20 dark:opacity-0',
					projectStat.bgColor
				)}
			/>
			<GradientOverlay />
			<InnerGlow className="rounded-3xl" />

			<div className="flex items-center justify-between relative z-10">
				<div className="flex flex-col">
					<m.span
						variants={cardAnimations.subtle}
						className="text-3xl font-bold mb-2 text-gray-900 dark:text-white"
					>
						{projectStat.id === 3 ? formatMinutes(projectStat.value) : projectStat.value}
					</m.span>
					<m.span
						variants={cardAnimations.subtle}
						className="text-sm text-gray-700 dark:text-gray-300 font-medium"
					>
						{projectStat.label}
					</m.span>
				</div>
				<ProjectStatsImage projectStat={projectStat} />
			</div>
		</m.div>
	)
}
