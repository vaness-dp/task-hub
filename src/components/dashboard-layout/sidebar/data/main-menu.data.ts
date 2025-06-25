import {
	CalendarDays,
	ChartColumnBig,
	LayoutGrid,
	MessageCircleMore,
	NotebookText,
	SettingsIcon,
	UsersRound
} from 'lucide-react'

import type { IMenuItem } from '@/components/dashboard-layout/sidebar/menu/menu.types'

import { Pages } from '@/config/pages.config'

export const MAIN_MENU: IMenuItem[] = [
	{
		icon: LayoutGrid,
		label: 'Dashboard',
		href: Pages.DASHBOARD
	},
	{
		icon: MessageCircleMore,
		label: 'Messages',
		href: Pages.MESSAGES,
		badge: 4
	},
	{
		icon: ChartColumnBig,
		label: 'Insight',
		href: Pages.INSIGHT
	},
	{
		icon: UsersRound,
		label: 'Team',
		href: Pages.TEAM
	},
	{
		icon: CalendarDays,
		label: 'Schedule',
		href: Pages.SCHEDULE
	},
	{
		icon: NotebookText,
		label: 'Report',
		href: Pages.REPORT
	},
	{
		label: 'Settings',
		icon: SettingsIcon,
		href: Pages.SETTINGS
	}
]
