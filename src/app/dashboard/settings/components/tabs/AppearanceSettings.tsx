import { AccentColorSection, DisplayOptionsSection, ThemeSection } from './appearance'

export function AppearanceSettings() {
	return (
		<div className="space-y-6">
			<ThemeSection />
			<AccentColorSection />
			<DisplayOptionsSection />
		</div>
	)
}
