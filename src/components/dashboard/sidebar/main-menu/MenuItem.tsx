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
						: 'text-secondary-content hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-700/50'
				)}
			>
				<div className="flex items-center space-x-3">
					<div
						className={cn(
							'w-5 h-5 flex items-center justify-center',
							isActive
								? 'text-white'
								: 'text-secondary-content group-hover:text-neutral-700 dark:group-hover:text-neutral-200'
						)}
					>
						<item.icon size={20} />
					</div>
					<span className="font-medium text-sm">{item.label}</span>
				</div>

				{/* Badge с абсолютным позиционированием */}
				{item.badge && item.badge > 0 && (
					<div className={cn('badge', isActive ? 'badge-active' : 'badge-normal')}>
						{item.badge > 99 ? '99+' : item.badge}
					</div>
				)}
			</Link>
		</li>
	)
}
