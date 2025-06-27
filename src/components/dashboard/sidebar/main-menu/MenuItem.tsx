import cn from 'clsx'
import Link from 'next/link'

import type { IMenuItem } from './menu.types'

interface Props {
	item: IMenuItem
	isActive: boolean
}

export function MenuItem({ item, isActive }: Props) {
	return (
		<li>
			<Link
				href={item.href}
				className={cn(
					'flex items-center py-3 px-4 rounded-2xl transition-all duration-200 group relative overflow-hidden origin-center hover:scale-[1.02] active:scale-[0.98]',
					isActive
						? 'bg-primary text-white hover:text-white dark:hover:text-white shadow-lg hover:shadow-xl'
						: 'backdrop-blur-xl hover:bg-white/30 dark:hover:bg-white/10 text-gray-900 dark:text-white'
				)}
			>
				{!isActive && (
					<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 dark:from-white/8 dark:to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
				)}

				<div className="flex items-center space-x-3 relative z-10">
					<div
						className={cn(
							'w-5 h-5 flex items-center justify-center',
							isActive
								? 'text-white'
								: 'text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200'
						)}
					>
						<item.icon size={20} />
					</div>
					<span className="font-medium text-sm">{item.label}</span>
				</div>

				{/* Badge */}
				{item.badge && item.badge > 0 && (
					<div
						className={cn(
							'absolute right-3 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded-full text-xs font-medium transition-all duration-200 z-10',
							isActive ? 'bg-white/20 text-white' : 'bg-primary/80 text-white'
						)}
					>
						{item.badge > 99 ? '99+' : item.badge}
					</div>
				)}
			</Link>
		</li>
	)
}
