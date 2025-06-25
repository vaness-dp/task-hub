// components/messages/MessagesHeader.tsx
import { MoreHorizontal, Plus, Search } from 'lucide-react'

export function MessagesHeader() {
	return (
		<div className="p-6 border-b border-neutral-200 dark:border-neutral-700">
			{/* Заголовок */}
			<div className="flex items-center justify-between mb-4">
				<h1 className="text-xl font-semibold text-[#2a2a2a] dark:text-[#f5f5f5]">Messages</h1>
				<div className="flex items-center space-x-2">
					<button className="w-8 h-8 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
						<Plus className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
					</button>
					<button className="w-8 h-8 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
						<MoreHorizontal className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
					</button>
				</div>
			</div>

			{/* Поиск */}
			<div className="relative">
				<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
				<input
					type="text"
					placeholder="Search conversations..."
					className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl text-sm text-[#2a2a2a] dark:text-[#f5f5f5] placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
				/>
			</div>
		</div>
	)
}
