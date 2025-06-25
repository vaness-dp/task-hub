'use client'

import * as m from 'framer-motion/m'
import { useAtom } from 'jotai'
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'

import { isCollapsedAtom } from '@/store/sidebar.store'

import { SidebarProjects } from './SidebarProjects'
import { SidebarHeading } from './components/SidebarHeading'
import { SidebarToggle } from './components/SidebarToggle'
import { SidebarMenu } from './menu/SidebarMenu'

export function Sidebar() {
	const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom)

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed)
	}

	return (
		<m.aside
			className="relative p-5 bg-white dark:bg-neutral-800"
			animate={{
				width: isCollapsed ? '84px' : '250px'
			}}
			transition={{
				type: 'spring',
				stiffness: 300,
				damping: 20
			}}
		>
			<SidebarToggle onClick={toggleSidebar}>
				{isCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
			</SidebarToggle>

			<SidebarHeading title="Main Menu" />
			<SidebarMenu />

			<SidebarHeading title="Projects" />
			<SidebarProjects />
		</m.aside>
	)
}
