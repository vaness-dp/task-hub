import { MoreHorizontal, Phone, Video } from 'lucide-react'

export function ChatHeader() {
	return (
		<div className="p-4 border-b border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm">
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-3">
					<div className="relative">
						<div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
							<span className="text-lg">👩‍💼</span>
						</div>
						<div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-neutral-800"></div>
					</div>
					<div>
						<h3 className="font-semibold text-[#2a2a2a] dark:text-[#f5f5f5] text-sm">
							Sheila Dara
						</h3>
						<p className="text-neutral-500 dark:text-neutral-400 text-xs">Project Manager</p>
					</div>
				</div>

				{/* Действия */}
				<div className="flex items-center space-x-2">
					<button className="w-8 h-8 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
						<Phone className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
					</button>
					<button className="w-8 h-8 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
						<Video className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
					</button>
					<button className="w-8 h-8 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
						<MoreHorizontal className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
					</button>
				</div>
			</div>
		</div>
	)
}
