import { ApiAccessSection } from './integration/ApiAccessSection'
import { ConnectedAppsSection } from './integration/ConnectedAppsSection'
import { WebhooksSection } from './integration/WebhooksSection'

export function IntegrationSettings() {
	return (
		<div className="space-y-6">
			<ConnectedAppsSection />
			<ApiAccessSection />
			<WebhooksSection />
		</div>
	)
}
