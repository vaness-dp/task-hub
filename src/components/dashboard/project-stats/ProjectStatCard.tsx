import cn from 'clsx'
import Image from 'next/image'

import { formatMinutes } from '@/utils/format-minutes'

import type { IProjectStat } from './projects-stats.types'

interface Props {
	projectStat: IProjectStat
}

// TODO: Вынести декор и эффекты в отдельные компоненты

export function ProjectStatCard({ projectStat }: Props) {
	return (
		<div
			className={cn(
				//  Light theme
				'backdrop-blur-xl bg-white/40 dark:bg-white/5',
				'rounded-3xl p-6 relative overflow-hidden shadow-lg border border-white/30 dark:border-white/10 cursor-pointer group transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1'
			)}
		>
			{/* Effects */}
			<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 dark:from-white/8 dark:to-transparent rounded-3xl" />
			{/* Border */}
			<div className="absolute inset-[1px] border border-white/40 rounded-3xl pointer-events-none dark:border-transparent" />

			{/* Colorful overlay for light theme */}
			<div
				className={cn(
					'absolute inset-0 rounded-3xl opacity-20 dark:opacity-0 transition-opacity',
					projectStat.bgColor
				)}
			/>

			{/* Gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/10 dark:from-black/20 dark:via-transparent dark:to-black/40 rounded-3xl" />

			{/* Colorful accent for dark theme */}
			<div
				className={cn(
					'absolute top-0 left-0 w-full h-1 rounded-t-3xl opacity-0 dark:opacity-100 transition-opacity',
					projectStat.bgColor
				)}
			/>

			{/* Decorative elements */}
			<div className="absolute top-4 right-4 w-8 h-8 bg-white/15 dark:bg-white/10 rounded-xl rotate-12 group-hover:rotate-45 group-hover:bg-white/25 dark:group-hover:bg-white/20 transition-all duration-500 shadow-sm backdrop-blur-sm" />
			<div className="absolute bottom-4 left-4 w-6 h-6 bg-white/12 dark:bg-white/8 rounded-full group-hover:scale-125 group-hover:bg-white/20 dark:group-hover:bg-white/15 transition-all duration-300 shadow-sm backdrop-blur-sm" />

			{/* Additional decorative elements */}
			<div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/8 dark:bg-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-500 backdrop-blur-sm" />

			{/* Additional decorative elements */}
			<div className="absolute top-8 left-6 w-2 h-2 bg-white/15 dark:bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-300" />
			<div className="absolute bottom-8 right-8 w-3 h-3 bg-white/12 dark:bg-white/8 rounded-full group-hover:scale-125 transition-transform duration-400" />

			<div className="flex items-center justify-between relative z-10">
				<div className="flex flex-col">
					<span className="text-3xl font-bold mb-2 text-gray-900 dark:text-white drop-shadow-md group-hover:scale-110 transition-transform duration-300 origin-left">
						{projectStat.id === 3 ? formatMinutes(projectStat.value) : projectStat.value}
					</span>
					<span className="text-sm text-gray-700 dark:text-gray-300 drop-shadow-sm font-medium group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
						{projectStat.label}
					</span>
				</div>

				<div className="flex-shrink-0 ml-4">
					<div className="w-20 h-20 backdrop-blur-xl bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 dark:group-hover:bg-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg relative overflow-hidden">
						{/* Effects for icon */}
						<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 dark:from-white/10 dark:to-transparent rounded-2xl" />

						{/* Colorful icon background for dark theme */}
						<div
							className={cn(
								'absolute inset-0 rounded-2xl opacity-0 dark:opacity-20 transition-opacity',
								projectStat.bgColor
							)}
						/>
						<Image
							src={projectStat.icon}
							alt={projectStat.label}
							width={48}
							height={48}
							className="opacity-95 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm relative z-10"
						/>
					</div>
				</div>
			</div>

			{/* Effect of glowing when hovering */}
			<div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 dark:via-white/8 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-full" />
		</div>
	)
}
