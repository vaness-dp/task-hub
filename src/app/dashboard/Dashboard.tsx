'use client'

import { Heading } from '@/ui/Heading'
import { SearchField } from '@/ui/search-field/SearchField'

import { Profile } from './profile/Profile'

export function Dashboard() {
	return (
		<div className="flex items-center justify-between mb-6">
			<Heading>Dashboard</Heading>
			<div className="flex items-center justify-between gap-3">
				<SearchField
					onChange={() => {}}
					value=""
				/>
				<Profile />
			</div>
		</div>
	)
}
