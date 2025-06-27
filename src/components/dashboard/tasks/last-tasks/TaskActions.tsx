import { Edit, Plus } from 'lucide-react'

export function TaskActions() {
	return (
		<div className="flex items-center space-x-2">
			<button className="w-8 h-8 bg-gradient-to-r from-primary to-primary/90 rounded-full flex items-center justify-center text-white hover:from-primary/90 hover:to-primary/80 transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden border border-white/30">
				<div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 rounded-full" />
				<Plus className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform duration-200" />
			</button>

			<button className="w-8 h-8 bg-white/40 dark:bg-white/20 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-white/60 dark:hover:bg-white/30 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-300 border border-white/30 dark:border-white/20 shadow-sm hover:shadow-lg group relative overflow-hidden backdrop-blur-sm">
				<div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 rounded-full" />
				<Edit className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform duration-200" />
			</button>
		</div>
	)
}
