'use client'

import * as m from 'framer-motion/m'

import { settingsCardAnimations } from '@/constants/animations/settings/settings.animations'

import { useSettingsStore } from '@/store/useSettingsStore'

import { SettingsContent } from './components/SettingsContent'
import { SettingsHeader } from './components/SettingsHeader'
import { SettingsNavigation } from './components/SettingsNavigation'

export function Settings() {
	const { activeTab } = useSettingsStore()

	return (
		<div className="p-6 h-screen overflow-y-auto">
			<SettingsHeader />

			<m.div
				initial="initial"
				animate="animate"
				variants={settingsCardAnimations}
				className="grid grid-cols-[280px_1fr] gap-6 mt-6"
			>
				{/* Settings Navigation */}
				<m.div variants={settingsCardAnimations}>
					<SettingsNavigation />
				</m.div>

				{/* Settings Content */}
				<m.div variants={settingsCardAnimations}>
					<SettingsContent activeTab={activeTab} />
				</m.div>
			</m.div>
		</div>
	)
}
