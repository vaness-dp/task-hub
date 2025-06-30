import type { ITask } from '@/types/task.types'

interface Props {
	task: ITask
}

export function TeamAvatars({ task }: Props) {
	return (
		<div className="flex -space-x-2 flex-shrink-0 ml-3">
			{task.team.slice(0, 3).map((member, index) => (
				<div
					key={index}
					className="team-avatars"
				>
					<div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 rounded-full" />
					<span className="relative z-10">{member}</span>
				</div>
			))}
		</div>
	)
}
