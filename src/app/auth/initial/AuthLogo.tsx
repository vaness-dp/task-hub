import { Calendar, CheckCircle, Users } from 'lucide-react'

import { OnlineIndicator } from '@/ui/OnlineIndicator'
import { GradientOverlay } from '@/ui/glass/GradientOverlay'
import { Decorative } from '@/ui/glass/auth/Decorative'

export function AuthLogo() {
	return (
		<div className="mb-6">
			<div className="w-full h-32 relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10">
				<GradientOverlay
					variant="tertiary"
					className="rounded-2xl"
				/>

				<Decorative className="top-4 right-4 w-8 h-8 rounded-lg rotate-12">
					<Users className="w-4 h-4 text-primary/70" />
				</Decorative>
				<Decorative className="bottom-4 left-4 w-6 h-6 rounded-full">
					<Calendar className="w-3 h-3 text-primary/70" />
				</Decorative>

				{/* Main content */}
				<div className="relative z-10 flex flex-col items-center justify-center h-full">
					<div className="relative mb-2">
						{/* Icon */}
						<div className="w-12 h-12 backdrop-blur-xl bg-gradient-to-br from-primary/80 to-primary rounded-xl flex items-center justify-center shadow-2xl relative overflow-hidden border border-white/30 dark:border-white/20">
							<GradientOverlay variant="quaternary" />
							<CheckCircle className="w-6 h-6 text-white relative z-10" />
						</div>

						<OnlineIndicator className="-top-1 -right-1 w-4 h-4" />
					</div>

					<div className="text-center">
						<div className="text-lg font-bold text-neutral-900 dark:text-neutral-100">Task Hub</div>
						<div className="text-xs text-neutral-500 dark:text-gray-400 font-medium">
							Project Management
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
