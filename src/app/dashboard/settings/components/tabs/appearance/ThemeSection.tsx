'use client'

import { useState } from 'react'

import { SettingsCard } from '../../common/SettingsCard'

import { ThemeOptionCard } from './ThemeOptionCard'
import { THEME_OPTIONS } from '@/data/settings.data'

export function ThemeSection() {
	const [selectedTheme, setSelectedTheme] = useState('system')

	return (
		<SettingsCard
			title="Theme"
			description="Choose your preferred theme appearance"
		>
			<div className="grid grid-cols-3 gap-4">
				{THEME_OPTIONS.map(theme => (
					<ThemeOptionCard
						key={theme.value}
						title={theme.title}
						icon={theme.icon}
						isActive={selectedTheme === theme.value}
						onClick={() => setSelectedTheme(theme.value)}
					/>
				))}
			</div>
		</SettingsCard>
	)
}
