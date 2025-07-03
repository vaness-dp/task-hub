import { AnimatePresence } from 'framer-motion'
import * as m from 'framer-motion/m'

import { settingsContentAnimations } from '@/constants/animations/settings/settings.animations'

import type { SettingsTab } from '@/types/settings.types'

import { AppearanceSettings } from './tabs/AppearanceSettings'
import { IntegrationSettings } from './tabs/IntegrationSettings'
import { NotificationSettings } from './tabs/NotificationSettings'
import { ProfileSettings } from './tabs/ProfileSettings'
import { SecuritySettings } from './tabs/SecuritySettings'

interface Props {
	activeTab: SettingsTab
}

export function SettingsContent({ activeTab }: Props) {
	const renderTabContent = () => {
		switch (activeTab) {
			case 'profile':
				return <ProfileSettings />
			case 'notifications':
				return <NotificationSettings />
			case 'security':
				return <SecuritySettings />
			case 'appearance':
				return <AppearanceSettings />
			case 'integrations':
				return <IntegrationSettings />
			default:
				return <ProfileSettings />
		}
	}

	return (
		<AnimatePresence mode="wait">
			<m.div
				key={activeTab}
				initial="initial"
				animate="animate"
				exit="exit"
				variants={settingsContentAnimations}
			>
				{renderTabContent()}
			</m.div>
		</AnimatePresence>
	)
}
