export const getStatusConfig = (status: string) => {
	switch (status) {
		case 'completed':
			return {
				bg: 'from-emerald-400 to-emerald-500',
				text: 'Done',
				progress: 100,
				glow: 'shadow-emerald-500/25'
			}
		case 'in-progress':
			return {
				bg: 'from-violet-400 to-purple-500',
				text: '52%',
				progress: 52,
				glow: 'shadow-violet-500/25'
			}
		case 'review':
			return {
				bg: 'from-rose-400 to-pink-500',
				text: '90%',
				progress: 90,
				glow: 'shadow-rose-500/25'
			}
		default:
			return {
				bg: 'from-gray-400 to-gray-500',
				text: 'Todo',
				progress: 0,
				glow: 'shadow-gray-500/25'
			}
	}
}
