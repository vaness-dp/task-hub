import { Check, type LucideIcon } from 'lucide-react'

import { cn } from '@/utils/styles'

interface Props {
	title: string
	icon: LucideIcon
	isActive: boolean
	onClick: () => void
}

export function ThemeOptionCard({ title, icon: Icon, isActive, onClick }: Props) {
	return (
		<button
			onClick={onClick}
			className={cn(
				'group relative p-4 backdrop-blur-xl border rounded-2xl transition-all duration-200 text-left',
				'hover:scale-105 hover:shadow-lg hover:border-primary/50',
				isActive
					? 'bg-primary/10 border-primary/50 shadow-lg'
					: 'bg-white/60 dark:bg-white/5 border-white/30 dark:border-white/10'
			)}
		>
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-3">
					<div
						className={cn(
							'w-10 h-10 rounded-xl flex items-center justify-center transition-colors',
							isActive
								? 'bg-primary text-white'
								: 'bg-white/80 dark:bg-white/10 text-gray-600 dark:text-gray-400'
						)}
					>
						<Icon className="w-5 h-5" />
					</div>
					<span className="font-medium text-gray-900 dark:text-white">{title}</span>
				</div>

				{isActive && (
					<div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
						<Check className="w-3 h-3 text-white" />
					</div>
				)}
			</div>
		</button>
	)
}
