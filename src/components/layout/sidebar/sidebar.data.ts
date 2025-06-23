import {
	CalendarDaysIcon,
	ChartColumnBig,
	FileChartColumnIncreasingIcon,
	LayoutDashboardIcon,
	MessageCircleIcon,
	SettingsIcon,
	UsersIcon
} from 'lucide-react'

import type { ISidebarItem } from './sidebar.types'

export const SIDEBAR_DATA: ISidebarItem[] = [
	{
		name: 'Dashboard',
		icon: LayoutDashboardIcon,
		link: '/'
	},
	{
		name: 'Message',
		icon: MessageCircleIcon,
		link: '/messages'
	},
	{
		name: 'Insight',
		icon: ChartColumnBig,
		link: '/insight'
	},
	{
		name: 'Team',
		icon: UsersIcon,
		link: '/team'
	},
	{
		name: 'Schedule',
		icon: CalendarDaysIcon,
		link: '/schedule'
	},
	{
		name: 'Report',
		icon: FileChartColumnIncreasingIcon,
		link: '/report'
	},
	{
		name: 'Settings',
		icon: SettingsIcon,
		link: '/settings'
	}
]
