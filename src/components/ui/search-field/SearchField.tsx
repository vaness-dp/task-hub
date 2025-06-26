import { Search } from 'lucide-react'

interface Props {
	placeholder?: string
	onChange: (value: string) => void
	value: string
}

export function SearchField({ placeholder = 'Search something...', onChange, value }: Props) {
	return (
		<div className="relative">
			<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
			<input
				type="search"
				placeholder={placeholder}
				value={value}
				onChange={e => onChange(e.target.value)}
				className="w-80 pl-11 pr-4 py-2.5 bg-white dark:bg-neutral-800 border border-neutral rounded-2xl text-sm text-primary-content placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
			/>
		</div>
	)
}
