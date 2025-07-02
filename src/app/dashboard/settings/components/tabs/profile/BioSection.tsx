import { InnerGlow } from '@/components/ui/glass/InnerGlow'

import { SettingsButton } from '../../common/SettingsButton'
import { SettingsCard } from '../../common/SettingsCard'

export function BioSection() {
	return (
		<SettingsCard
			title="About Me"
			description="Add a brief description about yourself"
		>
			<div className="space-y-4">
				<div>
					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
						Bio
					</label>
					<div className="relative">
						<textarea
							className="w-full px-4 py-3 backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-white/40 dark:border-white/10 rounded-2xl text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 resize-none"
							rows={4}
							placeholder="Tell others about yourself..."
							defaultValue="Product Manager with 5+ years of experience in building user-centric products. Passionate about design systems and team collaboration."
						/>
						<InnerGlow className="rounded-2xl pointer-events-none" />
					</div>
					<p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Maximum 280 characters</p>
				</div>

				<div className="flex justify-end">
					<SettingsButton variant="primary">Update Bio</SettingsButton>
				</div>
			</div>
		</SettingsCard>
	)
}
