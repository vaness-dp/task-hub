import { TodayTaskContent } from './TodayTaskContent'
import { TodayTaskIcon } from './TodayTaskIcon'

interface Props {
	icon: string
	title: string
	timeRange: string
}

export function TodayTaskHeader({ icon, title, timeRange }: Props) {
	return (
		<div className="flex items-start space-x-4 mb-4">
			<TodayTaskIcon icon={icon} />
			<TodayTaskContent
				title={title}
				timeRange={timeRange}
			/>
		</div>
	)
}
