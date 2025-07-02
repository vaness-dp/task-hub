export interface ITask {
	id: string
	title: string
	subtitle: string
	icon: string
	dueDate: string
	team: string[]
	status: 'completed' | 'in-progress' | 'review' | 'todo'
	comments: number
	images: number
	links: number
}

export interface ITodayTask {
	id: string
	title: string
	icon: string
	timeRange: string
	startTime: number
	duration: number
	color: string
	team: string[]
}

export interface ITaskWithTeam {
	team: string[]
}
