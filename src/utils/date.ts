export const calculateDaysUntilDue = (dueDate: string): string => {
	const today = new Date()
	const due = new Date(dueDate)

	today.setHours(0, 0, 0, 0)
	due.setHours(0, 0, 0, 0)

	const diffTime = due.getTime() - today.getTime()
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

	switch (true) {
		case diffDays < 0:
			return `${Math.abs(diffDays)} days overdue`

		case diffDays === 0:
			return 'Due today'

		case diffDays === 1:
			return '1 day'

		default:
			return `${diffDays} days`
	}
}
