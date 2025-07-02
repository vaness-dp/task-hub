import { CheckCircle } from 'lucide-react'

import { Icon } from '@/ui/Icon'
import { OnlineIndicator } from '@/ui/OnlineIndicator'
import { GradientOverlay } from '@/ui/glass/GradientOverlay'

export function AuthIcon() {
	return (
		<div className="relative mb-2">
			<div className="w-12 h-12 backdrop-blur-xl bg-gradient-to-br from-primary/80 to-primary rounded-xl flex items-center justify-center shadow-2xl relative overflow-hidden border border-white/30 dark:border-white/20">
				<GradientOverlay variant="quaternary" />
				<Icon
					icon={CheckCircle}
					size="xl"
					className="text-white dark:text-white relative z-10"
				/>
			</div>

			<OnlineIndicator className="-top-1 -right-1 w-4 h-4" />
		</div>
	)
}
