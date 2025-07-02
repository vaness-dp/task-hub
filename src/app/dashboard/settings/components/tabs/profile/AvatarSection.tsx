import { Camera, Upload } from 'lucide-react'

import { OnlineIndicator } from '@/components/ui/OnlineIndicator'
import { GradientOverlay } from '@/components/ui/glass/GradientOverlay'

import { SettingsButton } from '../../common/SettingsButton'
import { SettingsCard } from '../../common/SettingsCard'

export function AvatarSection() {
	return (
		<SettingsCard
			title="Profile Picture"
			description="Update your avatar and display image"
		>
			<div className="flex items-center space-x-6">
				<div className="relative">
					<div className="w-20 h-20 backdrop-blur-xl bg-gradient-to-br from-primary/80 to-primary rounded-full flex items-center justify-center shadow-lg border border-white/30 dark:border-white/20 relative overflow-hidden">
						<GradientOverlay className="rounded-full" />
						<span className="text-2xl relative z-10 text-white">👨‍💻</span>
					</div>
					<OnlineIndicator className="-bottom-1 -right-1 w-6 h-6" />
				</div>

				<div className="flex-1 space-y-3">
					<div>
						<h4 className="font-medium text-gray-900 dark:text-white">Change Avatar</h4>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Upload a new profile picture (JPG, PNG up to 5MB)
						</p>
					</div>

					<div className="flex space-x-3">
						<SettingsButton
							variant="primary"
							icon={Upload}
						>
							Upload Photo
						</SettingsButton>
						<SettingsButton
							variant="secondary"
							icon={Camera}
						>
							Take Photo
						</SettingsButton>
					</div>
				</div>
			</div>
		</SettingsCard>
	)
}
