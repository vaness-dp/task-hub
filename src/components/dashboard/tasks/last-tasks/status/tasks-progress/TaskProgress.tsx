import { useMemo } from 'react'

import { cn } from '@/utils/styles'

import type { ITask } from '@/types/task.types'

import { getStatusConfig } from '../status.config'

import { ProgressBar } from './ProgressBar'
import { StatusBadge } from './StatusBadge'

interface Props {
	task: ITask
	className?: string
}

export function TaskProgress({ task, className }: Props) {
	const statusConfig = useMemo(() => getStatusConfig(task.status), [task.status])
	const { progress, text, bg: bgGradient, glow: glowEffect } = statusConfig

	if (progress > 0 && progress < 100) {
		return (
			<div className={cn('w-full', className)}>
				<ProgressBar
					progress={progress}
					text={text}
					bgGradient={bgGradient}
					glowEffect={glowEffect}
				/>
			</div>
		)
	}

	return (
		<StatusBadge
			text={text}
			bgGradient={bgGradient}
			glowEffect={glowEffect}
		/>
	)
}
