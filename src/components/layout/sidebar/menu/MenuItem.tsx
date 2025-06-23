import cn from 'clsx'
import Link from 'next/link'

import type { ISidebarItem } from '../sidebar.types'

interface Props {
	item: ISidebarItem
	isActive: boolean
}

export function MenuItem({ item, isActive }: Props) {
	return (
		<li>
			<Link
				href={item.link}
				title={item.name}
				className={cn(
					'py-2.5 px-3 flex items-center gap-3 rounded-full',
					isActive && 'bg-primary text-white font-medium'
				)}
			>
				<item.icon
					size={20}
					className={cn(isActive && 'text-white')}
				/>
				{item.name}
			</Link>
		</li>
	)
}
