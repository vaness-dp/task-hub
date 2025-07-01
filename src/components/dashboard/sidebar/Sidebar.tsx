'use client'

import { GradientOverlay } from '@/ui/glass/GradientOverlay'
import { InnerGlow } from '@/ui/glass/InnerGlow'

import { SidebarHeading } from './SidebarHeading'
import { SidebarMenu } from './main-menu/SidebarMenu'
import { Profile } from './profile/Profile'
import { SidebarProjects } from './projects-menu/SidebarProjects'

export function Sidebar() {
	return (
		<aside className="relative p-5 backdrop-blur-2xl bg-white/40 dark:bg-neutral-800 border-r border-white/20 dark:border-white/10 overflow-hidden">
			<GradientOverlay />
			<InnerGlow />

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
