import { create } from 'zustand'

import type { SettingsStore } from '@/types'

/**
 * Zustand store for managing settings page state
 * Handles active tab navigation and settings data
 */
export const useSettingsStore = create<SettingsStore>(set => ({
	activeTab: 'profile',
	setActiveTab: tab => set({ activeTab: tab })
}))
