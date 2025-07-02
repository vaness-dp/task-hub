import { ApiAccessSection, ConnectedAppsSection, WebhooksSection } from './integration'

export function IntegrationSettings() {
	return (
		<div className="space-y-6">
			<ConnectedAppsSection />
			<ApiAccessSection />
			<WebhooksSection />
		</div>
	)
}
