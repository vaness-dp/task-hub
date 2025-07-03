import {
	Bell,
	Calendar,
	Github,
	Lock,
	Mail,
	MessageSquare,
	Monitor,
	Moon,
	Palette,
	Plug,
	Slack,
	Sun,
	User,
	Users
} from 'lucide-react'

import type {
	AccentColor,
	IntegrationItem,
	NavigationItem,
	NotificationPreference,
	ThemeOption
} from '@/types/settings.types'

/**
 * Navigation items for settings sidebar
 */
export const SETTINGS_NAVIGATION: NavigationItem[] = [
	{
		id: 'profile',
		label: 'Profile',
		icon: User,
		description: 'Personal information'
	},
	{
		id: 'notifications',
		label: 'Notifications',
		icon: Bell,
		description: 'Manage alerts'
	},
	{
		id: 'security',
		label: 'Security',
		icon: Lock,
		description: 'Password & privacy'
	},
	{
		id: 'appearance',
		label: 'Appearance',
		icon: Palette,
		description: 'Theme & display'
	},
	{
		id: 'integrations',
		label: 'Integrations',
		icon: Plug,
		description: 'Connected apps'
	}
] as const

/**
 * Email notification preferences
 */
export const EMAIL_NOTIFICATIONS: NotificationPreference[] = [
	{
		icon: Mail,
		title: 'Task Updates',
		description: 'Get notified when tasks are assigned or updated',
		defaultChecked: true
	},
	{
		icon: Users,
		title: 'Team Activity',
		description: 'Notifications about team member actions',
		defaultChecked: false
	},
	{
		icon: Bell,
		title: 'Weekly Summary',
		description: 'Weekly digest of your activity and team progress',
		defaultChecked: true
	}
] as const

/**
 * Push notification preferences
 */
export const PUSH_NOTIFICATIONS: NotificationPreference[] = [
	{
		icon: MessageSquare,
		title: 'New Messages',
		description: 'Get notified when you receive new messages',
		defaultChecked: true
	},
	{
		icon: Bell,
		title: 'Due Date Reminders',
		description: 'Reminders for upcoming task deadlines',
		defaultChecked: true
	}
] as const

/**
 * Theme options for appearance settings
 */
export const THEME_OPTIONS: ThemeOption[] = [
	{
		icon: Sun,
		title: 'Light',
		description: 'Bright and clean',
		value: 'light'
	},
	{
		icon: Moon,
		title: 'Dark',
		description: 'Easy on the eyes',
		value: 'dark'
	},
	{
		icon: Monitor,
		title: 'System',
		description: 'Match your device',
		value: 'system'
	}
] as const

/**
 * Available accent colors
 */
export const ACCENT_COLORS: AccentColor[] = [
	{ name: 'Blue', class: 'bg-blue-500', value: 'blue' },
	{ name: 'Purple', class: 'bg-purple-500', value: 'purple' },
	{ name: 'Green', class: 'bg-green-500', value: 'green' },
	{ name: 'Orange', class: 'bg-orange-500', value: 'orange' },
	{ name: 'Pink', class: 'bg-pink-500', value: 'pink' },
	{ name: 'Red', class: 'bg-red-500', value: 'red' }
] as const

/**
 * Integration services
 */
export const INTEGRATION_SERVICES: IntegrationItem[] = [
	{
		icon: Slack,
		name: 'Slack',
		description: 'Send notifications to your Slack workspace',
		connected: true
	},
	{
		icon: Github,
		name: 'GitHub',
		description: 'Connect your repositories for issue tracking',
		connected: false
	},
	{
		icon: Calendar,
		name: 'Google Calendar',
		description: 'Sync your tasks with Google Calendar',
		connected: true
	},
	{
		icon: Mail,
		name: 'Email',
		description: 'SMTP configuration for email notifications',
		connected: false
	}
] as const
