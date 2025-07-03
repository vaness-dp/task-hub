import { TIME_SLOTS } from '@/constants/timeline.constants'

export function TimelineHeader() {
	return (
		<div className="flex text-sm text-gray-600 dark:text-gray-400 px-4 mb-6">
			{TIME_SLOTS.map(time => (
				<div
					key={time}
					className="flex-1 text-center"
				>
					<span className="font-medium">{time}</span>
				</div>
			))}
		</div>
	)
}
