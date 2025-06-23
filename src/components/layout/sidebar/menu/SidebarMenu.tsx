'use client'

import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import { SidebarHeading } from '../SidebarHeading'
import type { ISidebarItem } from '../sidebar.types'

import { MenuItem } from './MenuItem'

interface Props {
	title: string
	menu: ISidebarItem[]
}

export function SidebarMenu({ title, menu }: Props) {
	const pathname = usePathname()

	return (
		<nav className="mb-6">
			<SidebarHeading title={title} />
			<ul>
				{menu.map(menuItem => (
					<MenuItem
						key={menuItem.name}
						item={menuItem}
						isActive={!!match(menuItem.link)(pathname)}
					/>
				))}
			</ul>
		</nav>
	)
}
