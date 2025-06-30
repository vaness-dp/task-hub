import { Bell } from 'lucide-react'

export function Notifications() {
	return (
		<button className="relative w-10 h-10 backdrop-blur-xl bg-white/40 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-lg group overflow-hidden">
			<Bell className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-200 relative z-10" />
		</button>
	)
}
