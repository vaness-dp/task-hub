import { SettingsCard } from '../common/SettingsCard'
import { SettingsToggle } from '../common/SettingsToggle'

import { EMAIL_NOTIFICATIONS, PUSH_NOTIFICATIONS } from '@/data/settings.data'

export function NotificationSettings() {
	return (
		<div className="space-y-6">
			<SettingsCard
				title="Email Notifications"
				description="Manage which emails you receive from us"
			>
				<div className="space-y-4">
					{EMAIL_NOTIFICATIONS.map(item => (
						<SettingsToggle
							key={item.title}
							icon={item.icon}
							title={item.title}
							description={item.description}
							defaultChecked={item.defaultChecked}
						/>
					))}
				</div>
			</SettingsCard>

			<SettingsCard
				title="Push Notifications"
				description="Real-time notifications on your devices"
			>
				<div className="space-y-4">
					{PUSH_NOTIFICATIONS.map(item => (
						<SettingsToggle
							key={item.title}
							icon={item.icon}
							title={item.title}
							description={item.description}
							defaultChecked={item.defaultChecked}
						/>
					))}
				</div>
			</SettingsCard>
		</div>
	)
}
