import * as m from 'framer-motion/m'
import { Settings as SettingsIcon } from 'lucide-react'

import { Heading } from '@/components/ui/Heading'
import { Icon } from '@/components/ui/Icon'

import { cardAnimations } from '@/constants/animations/dashboard/project-stat-card.animations'

export function SettingsHeader() {
	return (
		<m.div
			variants={cardAnimations.subtle}
			initial="initial"
			animate="animate"
			className="flex items-center space-x-4"
		>
			<div className="w-12 h-12 backdrop-blur-xl bg-gradient-to-br from-primary/80 to-primary rounded-2xl flex items-center justify-center shadow-lg border border-white/30 dark:border-white/20 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 rounded-2xl" />
				<Icon
					icon={SettingsIcon}
					size="lg"
					className="text-white relative z-10"
				/>
			</div>

			<div>
				<Heading className="text-2xl">Settings</Heading>
				<p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
					Manage your account and application preferences
				</p>
			</div>
		</m.div>
	)
}
