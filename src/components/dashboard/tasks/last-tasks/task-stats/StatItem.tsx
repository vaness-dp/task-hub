import cn from 'clsx'
import * as m from 'framer-motion/m'
import type { LucideIcon } from 'lucide-react'

import { cardAnimations } from '@/constants/animations/dashboard/project-stat-card.animations'

interface Props {
	icon: LucideIcon
	value: number
	className?: string
}

export function StatItem({ icon: Icon, value, className }: Props) {
	return (
		<m.div
			variants={cardAnimations.subtle}
			className={cn('flex items-center space-x-1.5 text-gray-500 dark:text-gray-400', className)}
		>
			<Icon className="w-4 h-4" />
			<span className="text-sm font-medium">{value}</span>
		</m.div>
	)
}
