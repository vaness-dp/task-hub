import { cn } from '@/utils/styles'

interface Props {
	variant?: 'default' | 'task-block'
}

export const containerClass = ({ variant = 'default' }: Props) =>
	cn('flex flex-shrink-0', variant === 'task-block' ? '-space-x-1' : '-space-x-2 ml-3')

export const avatarClass = ({ variant = 'default' }: Props) =>
	cn(
		'relative overflow-hidden flex items-center justify-center',
		variant === 'task-block'
			? 'w-8 h-8 backdrop-blur-sm bg-white/40 dark:bg-white/30 rounded-full border border-white/60 dark:border-white/50 text-sm'
			: 'team-avatars'
	)
