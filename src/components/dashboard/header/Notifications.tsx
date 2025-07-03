import { Bell } from 'lucide-react'

import { Icon } from '@/ui/Icon'

export function Notifications() {
	return (
		<button className="button-action">
			<Icon
				icon={Bell}
				className="group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-200 relative z-10"
			/>
		</button>
	)
}
