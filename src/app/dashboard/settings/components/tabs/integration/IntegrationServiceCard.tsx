import type { LucideIcon } from 'lucide-react'

import { cn } from '@/utils/styles'

import { SettingsButton } from '../../common/SettingsButton'

interface Props {
	icon: LucideIcon
	name: string
	description: string
	connected: boolean
	onToggle: () => void
}

export function IntegrationServiceCard({
	icon: Icon,
	name,
	description,
	connected,
	onToggle
}: Props) {
	return (
		<div className="flex items-center justify-between p-4 backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-2xl">
			<div className="flex items-center space-x-4">
				<div className="w-12 h-12 backdrop-blur-xl bg-gradient-to-br from-primary/80 to-primary rounded-2xl flex items-center justify-center shadow-lg border border-white/30 dark:border-white/20">
					<Icon className="w-6 h-6 text-white" />
				</div>
				<div>
					<h4 className="font-medium text-gray-900 dark:text-white">{name}</h4>
					<p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
				</div>
			</div>

			<div className="flex items-center space-x-3">
				<div
					className={cn(
						'px-2 py-1 rounded-lg text-xs font-medium',
						connected
							? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
							: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
					)}
				>
					{connected ? 'Connected' : 'Not Connected'}
				</div>
				<SettingsButton
					variant={connected ? 'danger' : 'primary'}
					onClick={onToggle}
				>
					{connected ? 'Disconnect' : 'Connect'}
				</SettingsButton>
			</div>
		</div>
	)
}
