import * as m from 'framer-motion/m'

import { Icon } from '@/components/ui/Icon'
import { GradientOverlay } from '@/components/ui/glass/GradientOverlay'
import { InnerGlow } from '@/components/ui/glass/InnerGlow'

import { settingsNavigationAnimations } from '@/constants/animations/settings/settings.animations'

import { useSettingsStore } from '@/store/useSettingsStore'

import { cn } from '@/utils/styles'

import { SETTINGS_NAVIGATION } from '@/data/settings.data'

export function SettingsNavigation() {
	const { activeTab, setActiveTab } = useSettingsStore()

	return (
		<div className="backdrop-blur-xl bg-white/60 dark:bg-white/5 rounded-3xl border border-white/30 dark:border-white/10 p-6 relative overflow-hidden shadow-lg">
			<GradientOverlay />
			<InnerGlow />

			<div className="relative z-10">
				<h3 className="font-semibold text-gray-900 dark:text-white mb-6">Settings</h3>

				<nav className="space-y-2">
					{SETTINGS_NAVIGATION.map((item, index) => (
						<m.button
							key={item.id}
							initial="initial"
							animate="animate"
							whileHover="hover"
							whileTap="tap"
							variants={settingsNavigationAnimations}
							custom={index}
							onClick={() => setActiveTab(item.id)}
							className={cn(
								'w-full text-left p-4 rounded-2xl transition-all duration-200 relative overflow-hidden group',
								activeTab === item.id
									? 'bg-primary/10 dark:bg-primary/20 border border-primary/30'
									: 'hover:bg-white/40 dark:hover:bg-white/10 border border-transparent'
							)}
						>
							{activeTab === item.id && (
								<m.div
									layoutId="activeTab"
									className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl"
									transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
								/>
							)}

							<div className="relative z-10 flex items-center space-x-3">
								<div
									className={cn(
										'w-8 h-8 rounded-lg flex items-center justify-center transition-colors',
										activeTab === item.id
											? 'bg-primary/20 text-primary'
											: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-gray-700'
									)}
								>
									<Icon icon={item.icon} />
								</div>

								<div className="flex-1 min-w-0">
									<div
										className={cn(
											'font-medium transition-colors',
											activeTab === item.id ? 'text-primary' : 'text-gray-900 dark:text-white'
										)}
									>
										{item.label}
									</div>
									<div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
										{item.description}
									</div>
								</div>
							</div>
						</m.button>
					))}
				</nav>
			</div>
		</div>
	)
}
