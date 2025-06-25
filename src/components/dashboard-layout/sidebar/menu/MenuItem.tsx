// components/sidebar/menu/MenuItem.tsx
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
					'flex items-center py-3 px-4 rounded-2xl transition-all group relative',
					isActive
						? 'bg-primary text-white hover:text-white dark:hover:text-white shadow-sm'
						: 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-700/50'
				)}
			>
				<div className="flex items-center space-x-3">
					<div
						className={cn(
							'w-5 h-5 flex items-center justify-center',
							isActive
								? 'text-white'
								: 'text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200'
						)}
					>
						<item.icon size={20} />
					</div>
					<span className="font-medium text-sm">{item.label}</span>
				</div>

				{/* Badge с абсолютным позиционированием */}
				{item.badge && item.badge > 0 && (
					<div
						className={cn(
							'absolute right-3 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded-full text-xs font-medium min-w-[20px] text-center shadow-sm transition-all',
							isActive ? 'bg-white text-primary' : 'bg-primary text-white'
						)}
					>
						{item.badge > 99 ? '99+' : item.badge}
					</div>
				)}
			</Link>
		</li>
	)
}
