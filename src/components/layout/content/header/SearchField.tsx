import { SearchIcon } from 'lucide-react'

export function SearchField() {
	return (
		<div className="relative flex items-center gap-2">
			<span className="absolute top-1/2 left-4 -translate-y-1/2 text-black">
				<SearchIcon
					width={25}
					height={25}
					strokeWidth={1.5}
					aria-label="Search"
				/>
			</span>
			<input
				type="search"
				placeholder="Search something..."
				className="w-full bg-white rounded-full outline-none shadow-none py-3 pr-12 pl-12 placeholder:text-gray-dark"
			/>
		</div>
	)
}
