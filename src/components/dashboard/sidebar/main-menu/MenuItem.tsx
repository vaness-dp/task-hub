import cn from 'clsx'
import Link from 'next/link'

import { Badge } from './Badge'
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
					'sidebar-menu-item group',
					isActive && 'bg-primary dark:hover:!bg-primary text-white shadow-lg hover:shadow-xl'
				)}
			>
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

				{!!item.badge && <Badge>{item.badge > 99 ? '99+' : item.badge}</Badge>}
			</Link>
		</li>
	)
}
