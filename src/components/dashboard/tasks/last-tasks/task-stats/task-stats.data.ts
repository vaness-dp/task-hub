import type { LucideIcon } from 'lucide-react'
import { Image, Link, MessageCircle } from 'lucide-react'

import type { ITask } from '@/types/task.types'

export interface Props {
	icon: LucideIcon
	key: keyof Pick<ITask, 'comments' | 'images' | 'links'>
}

export const STATS_DATA: Props[] = [
	{ icon: MessageCircle, key: 'comments' },
	{ icon: Image, key: 'images' },
	{ icon: Link, key: 'links' }
] as const
