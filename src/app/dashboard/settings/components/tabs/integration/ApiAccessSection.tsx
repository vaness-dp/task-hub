import { Copy, Eye, Plus, Trash2 } from 'lucide-react'

import { SettingsButton } from '../../common/SettingsButton'
import { SettingsCard } from '../../common/SettingsCard'

export function ApiAccessSection() {
	return (
		<SettingsCard
			title="API Access"
			description="Create and manage API keys for external applications"
		>
			<div className="space-y-4">
				{/* Existing API Keys */}
				<div className="space-y-3">
					<div className="flex items-center justify-between p-3 backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-2xl">
						<div className="flex-1">
							<div className="flex items-center space-x-3">
								<div>
									<h4 className="font-medium text-gray-900 dark:text-white">Production API Key</h4>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										Created on Jan 15, 2024 • Last used 2 days ago
									</p>
								</div>
							</div>
							<div className="mt-2 flex items-center space-x-2">
								<code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">
									sk_live_****************************abcd
								</code>
								<button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
									<Copy className="w-4 h-4 text-gray-500" />
								</button>
								<button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
									<Eye className="w-4 h-4 text-gray-500" />
								</button>
							</div>
						</div>
						<SettingsButton
							variant="danger"
							icon={Trash2}
						>
							Delete
						</SettingsButton>
					</div>

					<div className="flex items-center justify-between p-3 backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-2xl">
						<div className="flex-1">
							<div className="flex items-center justify-between">
								<div>
									<h4 className="font-medium text-gray-900 dark:text-white">Development API Key</h4>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										Created on Dec 10, 2023 • Never used
									</p>
								</div>
								<div className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-400">
									Inactive
								</div>
							</div>
						</div>
						<SettingsButton
							variant="danger"
							icon={Trash2}
						>
							Delete
						</SettingsButton>
					</div>
				</div>

				{/* Create New API Key */}
				<div className="pt-4 border-t border-gray-200 dark:border-gray-700">
					<SettingsButton
						variant="primary"
						icon={Plus}
					>
						Create New API Key
					</SettingsButton>
				</div>
			</div>
		</SettingsCard>
	)
}
