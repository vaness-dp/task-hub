import * as m from 'framer-motion/m'

import { GradientOverlay } from '@/components/ui/glass/GradientOverlay'
import { InnerGlow } from '@/components/ui/glass/InnerGlow'

import { settingsCardAnimations } from '@/constants/animations/settings/settings.animations'

import { cn } from '@/utils/styles'

import type { BaseProps } from '@/types'

interface Props extends BaseProps {
	title: string
	description?: string
}

export function SettingsCard({ title, description, children, className = '' }: Props) {
	return (
		<m.div
			initial="initial"
			whileInView="animate"
			variants={settingsCardAnimations}
			className={cn(
				'backdrop-blur-xl bg-white/60 dark:bg-white/5 rounded-3xl border border-white/30 dark:border-white/10 p-6 relative overflow-hidden shadow-lg',
				className
			)}
		>
			<GradientOverlay />
			<InnerGlow />

			<div className="relative z-10">
				<div className="mb-6">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
					{description && <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>}
				</div>

				{children}
			</div>
		</m.div>
	)
}
