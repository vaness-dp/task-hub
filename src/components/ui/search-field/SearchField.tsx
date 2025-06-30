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
				<input
					type="search"
					placeholder={placeholder}
					value={value}
					onChange={e => onChange(e.target.value)}
					className="search-field"
				/>
			</div>
		</div>
	)
}
