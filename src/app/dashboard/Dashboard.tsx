'use client'

import { Heading } from '@/ui/Heading'
import { SearchField } from '@/ui/search-field/SearchField'

export function Dashboard() {
	return (
		<div>
			<div className="flex items-center justify-between mb-6">
				<Heading>Dashboard</Heading>
				<SearchField
					onChange={() => {}}
					value=""
				/>
			</div>
		</div>
	)
}
