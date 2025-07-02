import { Check } from 'lucide-react'

import { cn } from '@/utils/styles'

interface Props {
	name: string
	colorClass: string
	isActive: boolean
	onClick: () => void
}

export function AccentColorCard({ name, colorClass, isActive, onClick }: Props) {
	return (
		<button
			onClick={onClick}
			className={cn(
				'group relative p-3 backdrop-blur-xl border rounded-2xl transition-all duration-200',
				'hover:scale-105 hover:shadow-lg',
				isActive
					? 'border-primary/50 shadow-lg'
					: 'bg-white/60 dark:bg-white/5 border-white/30 dark:border-white/10'
			)}
		>
			<div className="flex flex-col items-center space-y-2">
				<div className="relative">
					<div
						className={cn(
							'w-8 h-8 rounded-xl shadow-lg border border-white/30 dark:border-white/20 flex items-center justify-center',
							colorClass
						)}
					>
						{isActive && <Check className="w-4 h-4 text-white" />}
					</div>
				</div>
				<span className="text-xs font-medium text-gray-700 dark:text-gray-300">{name}</span>
			</div>
		</button>
	)
}
