import { SettingsCard } from '../../common/SettingsCard'

import { IntegrationServiceCard } from './IntegrationServiceCard'
import { INTEGRATION_SERVICES } from '@/data/settings.data'

export function ConnectedAppsSection() {
	const handleToggleConnection = (serviceName: string) => {
		console.log(`Toggle connection for: ${serviceName}`)
		// TODO: Implement actual toggle logic
	}

	return (
		<SettingsCard
			title="Connected Apps"
			description="Manage your third-party integrations and connected services"
		>
			<div className="space-y-4">
				{INTEGRATION_SERVICES.map(service => (
					<IntegrationServiceCard
						key={service.name}
						icon={service.icon}
						name={service.name}
						description={service.description}
						connected={service.connected}
						onToggle={() => handleToggleConnection(service.name)}
					/>
				))}
			</div>
		</SettingsCard>
	)
}
