'use client'

import { SidebarHeader } from './header/SidebarHeader'
import { SidebarMenu } from './menu/SidebarMenu'
import { SIDEBAR_DATA } from './sidebar.data'

export function Sidebar() {
	return (
		<aside className="px-4 py-14 whitespace-nowrap overflow-hidden bg-white w-60 min-h-screen">
			<SidebarHeader />
			<SidebarMenu
				title="Main Menu"
				menu={SIDEBAR_DATA}
			/>
			<SidebarMenu
				title="Projects"
				menu={[]}
			/>
		</aside>
	)
}
