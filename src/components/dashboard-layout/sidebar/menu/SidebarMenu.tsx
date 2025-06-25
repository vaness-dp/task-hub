'use client'

import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import { MAIN_MENU } from '../data/main-menu.data'

import { MenuItem } from './MenuItem'

export function SidebarMenu() {
	const pathname = usePathname()

	return (
		<nav className="mb-8">
			<ul className="space-y-2">
				{MAIN_MENU.map(menuItem => (
					<MenuItem
						key={menuItem.href}
						item={menuItem}
						isActive={!!match(menuItem.href)(pathname)}
					/>
				))}
			</ul>
		</nav>
	)
}
