import { Link, Plus } from 'lucide-react'

import { SettingsButton } from '../../common/SettingsButton'
import { SettingsCard } from '../../common/SettingsCard'

export function WebhooksSection() {
	return (
		<SettingsCard
			title="Webhooks"
			description="Configure webhook endpoints to receive real-time notifications"
		>
			{/* Empty State */}
			<div className="text-center py-8">
				<div className="w-16 h-16 mx-auto mb-4 backdrop-blur-xl bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border border-white/30 dark:border-white/20">
					<Link className="w-8 h-8 text-primary" />
				</div>
				<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
					No Webhooks Configured
				</h3>
				<p className="text-gray-500 dark:text-gray-400 mb-6 max-w-sm mx-auto">
					Set up webhook endpoints to receive real-time notifications about task updates, team
					activity, and more.
				</p>
				<SettingsButton
					variant="primary"
					icon={Plus}
				>
					Add Webhook Endpoint
				</SettingsButton>
			</div>
		</SettingsCard>
	)
}
