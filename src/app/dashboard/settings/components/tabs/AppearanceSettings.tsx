import { AccentColorSection } from './appearance/AccentColorSection'
import { DisplayOptionsSection } from './appearance/DisplayOptionsSection'
import { ThemeSection } from './appearance/ThemeSection'

export function AppearanceSettings() {
	return (
		<div className="space-y-6">
			<ThemeSection />
			<AccentColorSection />
			<DisplayOptionsSection />
		</div>
	)
}
