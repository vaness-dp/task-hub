'use client'

import { SidebarHeading } from './SidebarHeading'
import { SidebarMenu } from './main-menu/SidebarMenu'
import { Profile } from './profile/Profile'
import { SidebarProjects } from './projects-menu/SidebarProjects'

export function Sidebar() {
	return (
		<aside className="relative p-5 backdrop-blur-2xl bg-white/40 dark:bg-neutral-800 border-r border-white/20 dark:border-white/10 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 dark:from-white/5 dark:to-transparent" />
			<div className="absolute inset-[1px] border-r border-white/30 dark:border-white/20 pointer-events-none" />

			<div className="relative z-10">
				<Profile />

				<SidebarHeading title="Main Menu" />
				<SidebarMenu />

				<SidebarHeading title="Projects" />
				<SidebarProjects />
			</div>
		</aside>
	)
}
