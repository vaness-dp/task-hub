import { MoreHorizontal, Plus, Search } from 'lucide-react'

export function MessagesHeader() {
	return (
		<div className="p-6 border-b border-neutral">
			{/* Header */}
			<div className="flex items-center justify-between mb-4">
				<h1 className="text-xl font-semibold text-primary-content">Messages</h1>
				<div className="flex items-center space-x-2">
					<button className="btn-icon-lg">
						<Plus className="icon" />
					</button>
					<button className="btn-icon-lg">
						<MoreHorizontal className="icon" />
					</button>
				</div>
			</div>

			{/* Search */}
			<div className="relative">
				<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
				<input
					type="text"
					placeholder="Search conversations..."
					className="input-messages-header"
				/>
			</div>
		</div>
	)
}
