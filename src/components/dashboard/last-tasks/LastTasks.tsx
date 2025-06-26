export function LastTasks() {
	const tasks = [
		{
			id: 1,
			title: 'Travel App User Flow',
			status: 'In Progress',
			progress: 52,
			color: 'bg-purple-500',
			team: ['👩‍💼', '👨‍💻', '👨‍🎨']
		},
		{
			id: 2,
			title: 'Travel App User Flow',
			status: 'Done',
			progress: 100,
			color: 'bg-green-500',
			team: ['👩‍💼', '👨‍💻', '👨‍🎨']
		},
		{
			id: 3,
			title: 'Travel App User Flow',
			status: 'In Progress',
			progress: 90,
			color: 'bg-yellow-500',
			team: ['👩‍💼', '👨‍💻', '👨‍🎨']
		}
	]

	return (
		<div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 shadow-sm border border-neutral">
			<div className="flex items-center justify-between mb-6">
				<h3 className="text-lg font-semibold text-primary-content">Last Tasks</h3>
				<span className="text-sm text-secondary-content">(3)</span>
			</div>

			<div className="space-y-4">
				{tasks.map(task => (
					<div
						key={task.id}
						className="p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-2xl"
					>
						<div className="flex items-start justify-between mb-3">
							<div className="flex items-center space-x-3">
								<div className={`w-3 h-3 ${task.color} rounded-full`}></div>
								<div>
									<h4 className="font-medium text-sm text-primary-content">{task.title}</h4>
									<p className="text-xs text-secondary-content">Due: 3 days</p>
								</div>
							</div>

							<div className="flex -space-x-2">
								{task.team.map((avatar, index) => (
									<div
										key={index}
										className="w-6 h-6 bg-neutral-200 dark:bg-neutral-600 rounded-full flex items-center justify-center text-xs border-2 border-white dark:border-neutral-800"
									>
										{avatar}
									</div>
								))}
							</div>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex-1 mr-4">
								<div className="w-full bg-neutral-200 dark:bg-neutral-600 rounded-full h-2">
									<div
										className={`h-2 ${task.color} rounded-full transition-all`}
										style={{ width: `${task.progress}%` }}
									></div>
								</div>
							</div>
							<span className="text-xs font-medium text-primary-content">{task.progress}%</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
