import { BellIcon } from 'lucide-react'

export function Notifications() {
	return (
		<div className="relative text-black cursor-pointer hover:text-gray-dark transition-colors rounded-full p-3 bg-white">
			<BellIcon
				width={25}
				height={25}
				strokeWidth={1.5}
				aria-label="Notifications"
			/>
		</div>
	)
}
