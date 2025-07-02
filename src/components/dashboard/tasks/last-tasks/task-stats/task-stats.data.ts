import type { LucideIcon } from 'lucide-react'
import { Image, Link, MessageCircle } from 'lucide-react'

import type { ITask } from '@/types/task.types'

/**
 * Configuration interface for task statistics items
 */
export interface TaskStatConfig {
	icon: LucideIcon
	key: keyof Pick<ITask, 'comments' | 'images' | 'links'>
}

/**
 * Configuration array for task statistics display
 * Defines which stats to show and their corresponding icons
 */
export const STATS_DATA: readonly TaskStatConfig[] = [
	{ icon: MessageCircle, key: 'comments' },
	{ icon: Image, key: 'images' },
	{ icon: Link, key: 'links' }
] as const
