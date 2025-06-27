import { Search } from 'lucide-react'

interface Props {
	placeholder?: string
	onChange: (value: string) => void
	value: string
}

export function SearchField({ placeholder = 'Search something...', onChange, value }: Props) {
	return (
		<div className="relative">
			<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400 z-20" />

			<div className="relative overflow-hidden rounded-2xl">
				{/* Effects */}
				<div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/8 dark:from-white/5 dark:to-transparent rounded-2xl" />
				<div className="absolute inset-[1px] border border-white/50 rounded-2xl pointer-events-none dark:border-transparent" />

				<input
					type="search"
					placeholder={placeholder}
					value={value}
					onChange={e => onChange(e.target.value)}
					className="w-80 pl-11 pr-4 py-2.5 backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-white/40 dark:border-white/10 rounded-2xl text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 hover:bg-white/70 dark:hover:bg-white/8 shadow-sm relative z-10"
				/>
			</div>
		</div>
	)
}
