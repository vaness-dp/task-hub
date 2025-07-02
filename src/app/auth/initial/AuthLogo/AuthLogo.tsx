import { Calendar, Users } from 'lucide-react'

import { Decorative } from '@/ui/glass/Decorative'
import { GradientOverlay } from '@/ui/glass/GradientOverlay'

import { AuthIcon } from './AuthIcon'

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

				<div className="relative z-10 flex flex-col items-center justify-center h-full">
					<AuthIcon />
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
