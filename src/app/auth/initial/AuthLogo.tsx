// components/auth/AuthLogo.tsx
import { Calendar, CheckCircle, Users } from 'lucide-react'

export function AuthLogo() {
	return (
		<div className="mb-6">
			<div className="w-full h-32 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-700 dark:to-neutral-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
				<div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-lg rotate-12 flex items-center justify-center">
					<Users className="w-4 h-4 text-primary/30" />
				</div>
				<div className="absolute bottom-4 left-4 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
					<Calendar className="w-3 h-3 text-primary/40" />
				</div>

				<div className="flex flex-col items-center">
					<div className="relative mb-2">
						<div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
							<CheckCircle className="w-6 h-6 text-white" />
						</div>
						<div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-neutral-700" />
					</div>

					<div className="text-center">
						<div className="text-lg font-bold text-text dark:text-text-secondary">Task Hub</div>
						<div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
							Project Management
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
