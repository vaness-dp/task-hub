'use client'

import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import { MenuItem } from './MenuItem'
import { MAIN_MENU } from './main-menu.data'

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
