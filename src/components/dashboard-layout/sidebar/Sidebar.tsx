'use client'

import { SidebarHeading } from './SidebarHeading'
import { SidebarProjects } from './SidebarProjects'
import { SidebarMenu } from './menu/SidebarMenu'
import { Profile } from './profile/Profile'

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
