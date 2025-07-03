import { create } from 'zustand'

import type { ISettingsStore } from '@/types/settings.types'

export const useSettingsStore = create<ISettingsStore>(set => ({
	activeTab: 'profile',
	setActiveTab: tab => set({ activeTab: tab })
}))
