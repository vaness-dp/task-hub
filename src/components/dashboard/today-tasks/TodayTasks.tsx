export function TodayTasks() {
	const timeSlots = ['9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm']

	const task = {
		title: 'Travel App User Flow',
		time: '10 am - 1:30 pm',
		team: ['👩‍💼', '👨‍💻', '👨‍🎨']
	}

	return (
		<div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 shadow-sm border border-neutral">
			<div className="flex items-center justify-between mb-6">
				<h3 className="text-lg font-semibold text-primary-content">Today Tasks</h3>
				<div className="flex -space-x-2">
					{task.team.map((avatar, index) => (
						<div
							key={index}
							className="w-8 h-8 bg-neutral-200 dark:bg-neutral-600 rounded-full flex items-center justify-center text-sm border-2 border-white dark:border-neutral-800"
						>
							{avatar}
						</div>
					))}
					<div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-medium border-2 border-white dark:border-neutral-800">
						+5
					</div>
				</div>
			</div>

			{/* Временная шкала */}
			<div className="relative">
				<div className="flex justify-between text-xs text-neutral-400 mb-4">
					{timeSlots.map(time => (
						<span key={time}>{time}</span>
					))}
				</div>

				{/* Задача */}
				<div className="relative bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-4 text-white">
					<div className="flex items-center space-x-2 mb-2">
						<div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
							<span className="text-xs">✈️</span>
						</div>
						<h4 className="font-medium text-sm">{task.title}</h4>
					</div>
					<p className="text-xs text-white/80">{task.time}</p>

					<div className="flex -space-x-1 mt-3">
						{task.team.map((avatar, index) => (
							<div
								key={index}
								className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs"
							>
								{avatar}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
