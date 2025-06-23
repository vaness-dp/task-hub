import { Heading } from '@/ui/Heading'

import { Notifications } from './Notifications'
import { SearchField } from './SearchField'

export function Header() {
	return (
		<header className="py-6 px-4 flex justify-between items-center">
			<Heading>Dashboard</Heading>
			<div className="flex items-center gap-4">
				<SearchField />
				<Notifications />
			</div>
		</header>
	)
}
