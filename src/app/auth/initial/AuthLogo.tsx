import { Calendar, CheckCircle, Users } from 'lucide-react'

export function AuthLogo() {
	return (
		<div className="mb-6">
			{/* Container for logo */}
			<div className="w-full h-32 relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10">
				{/* Inner glow */}
				<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 dark:from-white/8 dark:to-transparent rounded-2xl" />
				<div className="absolute inset-[1px] border border-white/30 dark:border-white/20 rounded-2xl pointer-events-none" />

				{/* Decorative elements */}
				<div className="absolute top-4 right-4 w-8 h-8 backdrop-blur-sm bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 rounded-lg rotate-12 flex items-center justify-center">
					<Users className="w-4 h-4 text-primary/70" />
				</div>
				<div className="absolute bottom-4 left-4 w-6 h-6 backdrop-blur-sm bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 rounded-full flex items-center justify-center">
					<Calendar className="w-3 h-3 text-primary/70" />
				</div>

				{/* Main content */}
				<div className="relative z-10 flex flex-col items-center justify-center h-full">
					<div className="relative mb-2">
						{/* Icon */}
						<div className="w-12 h-12 backdrop-blur-xl bg-gradient-to-br from-primary/80 to-primary rounded-xl flex items-center justify-center shadow-2xl relative overflow-hidden border border-white/30 dark:border-white/20">
							<div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent dark:from-white/20" />
							<div className="absolute inset-[1px] border border-white/40 dark:border-white/30 rounded-xl" />
							<CheckCircle className="w-6 h-6 text-white relative z-10" />
						</div>

						{/* Indicator */}
						<div className="absolute -top-1 -right-1 w-4 h-4 backdrop-blur-sm bg-green-500 rounded-full border-2 border-white/50 dark:border-white/30 shadow-lg overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-br from-white/40 dark:from-white/30 to-transparent rounded-full" />
						</div>
					</div>

					<div className="text-center">
						<div className="text-lg font-bold text-primary-content dark:text-white">Task Hub</div>
						<div className="text-xs text-secondary-content dark:text-gray-400 font-medium">
							Project Management
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
