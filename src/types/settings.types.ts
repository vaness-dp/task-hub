import type { LucideIcon } from 'lucide-react'

export type SettingsTab = 'profile' | 'notifications' | 'security' | 'appearance' | 'integrations'

export interface NavigationItem {
	id: SettingsTab
	label: string
	icon: LucideIcon
	description: string
}

export interface SettingsStore {
	activeTab: SettingsTab
	setActiveTab: (tab: SettingsTab) => void
}

export interface IntegrationItem {
	icon: LucideIcon
	name: string
	description: string
	connected: boolean
}

export interface NotificationPreference {
	icon: LucideIcon
	title: string
	description: string
	defaultChecked: boolean
}

export interface ThemeOption {
	icon: LucideIcon
	title: string
	description: string
	value: string
}

export interface AccentColor {
	name: string
	class: string
	value: string
}
