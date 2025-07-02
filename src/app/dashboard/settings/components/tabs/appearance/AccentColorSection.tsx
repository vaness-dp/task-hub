'use client'

import { useState } from 'react'

import { SettingsCard } from '../../common/SettingsCard'

import { AccentColorCard } from './AccentColorCard'
import { ACCENT_COLORS } from '@/data'

export function AccentColorSection() {
	const [selectedColor, setSelectedColor] = useState('blue')

	return (
		<SettingsCard
			title="Accent Color"
			description="Choose your preferred accent color"
		>
			<div className="grid grid-cols-6 gap-3">
				{ACCENT_COLORS.map(color => (
					<AccentColorCard
						key={color.value}
						name={color.name}
						colorClass={color.class}
						isActive={selectedColor === color.value}
						onClick={() => setSelectedColor(color.value)}
					/>
				))}
			</div>
		</SettingsCard>
	)
}
