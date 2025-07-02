import { SettingsCard } from '../../common/SettingsCard'

export function DisplayOptionsSection() {
	return (
		<SettingsCard
			title="Display Options"
			description="Customize how the interface appears"
		>
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<div>
						<h4 className="font-medium text-gray-900 dark:text-white">Compact Mode</h4>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Reduce spacing and padding throughout the interface
						</p>
					</div>
					<label className="relative inline-flex items-center cursor-pointer">
						<input
							type="checkbox"
							className="sr-only peer"
						/>
						<div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary /" />
					</label>
				</div>

				<div className="flex items-center justify-between">
					<div>
						<h4 className="font-medium text-gray-900 dark:text-white">Smooth Animations</h4>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Enable smooth transitions and animations
						</p>
					</div>
					<label className="relative inline-flex items-center cursor-pointer">
						<input
							type="checkbox"
							className="sr-only peer"
							defaultChecked
						/>
						<div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
					</label>
				</div>
			</div>
		</SettingsCard>
	)
}
