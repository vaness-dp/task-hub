import { TeamAvatars } from '@/ui/team-avatars/TeamAvatars'

interface Props {
	teamMembers: string[]
}

export function TodayTasksHeader({ teamMembers }: Props) {
	return (
		<div className="flex items-center justify-between">
			<h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Today Tasks</h2>

			<div className="flex items-center space-x-2">
				<div className="flex -space-x-2">
					<TeamAvatars
						teamMembers={teamMembers}
						maxVisible={4}
						showCounter
					/>
				</div>
			</div>
		</div>
	)
}
