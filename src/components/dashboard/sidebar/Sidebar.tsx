'use client'

import { SidebarHeading } from './SidebarHeading'
import { SidebarMenu } from './main-menu/SidebarMenu'
import { Profile } from './profile/Profile'
import { SidebarProjects } from './projects-menu/SidebarProjects'

export function Sidebar() {
	return (
		<aside className="relative p-5 bg-white dark:bg-neutral-800 border-r border-neutral">
			<Profile />

			<SidebarHeading title="Main Menu" />
			<SidebarMenu />

			<SidebarHeading title="Projects" />
			<SidebarProjects />
		</aside>
	)
}
