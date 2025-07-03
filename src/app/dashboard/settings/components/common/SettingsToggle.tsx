'use client'

import type { LucideIcon } from 'lucide-react'
import { useState } from 'react'

import { Icon } from '@/components/ui/Icon'

import { cn } from '@/utils/styles'

interface Props {
	icon: LucideIcon
	title: string
	description: string
	defaultChecked?: boolean
	onChange?: (checked: boolean) => void
}

export function SettingsToggle({
	icon: IconComponent,
	title,
	description,
	defaultChecked = false,
	onChange
}: Props) {
	const [checked, setChecked] = useState(defaultChecked)

	const handleToggle = () => {
		const newValue = !checked
		setChecked(newValue)
		onChange?.(newValue)
	}

	return (
		<div className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/20 dark:hover:bg-white/5 transition-colors">
			<div className="flex items-center space-x-4">
				<div className="w-10 h-10 backdrop-blur-xl bg-white/40 dark:bg-white/10 rounded-2xl flex items-center justify-center border border-white/30 dark:border-white/20">
					<Icon
						icon={IconComponent}
						className="text-gray-600 dark:text-gray-300"
					/>
				</div>

				<div>
					<h4 className="font-medium text-gray-900 dark:text-white">{title}</h4>
					<p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
				</div>
			</div>

			<button
				onClick={handleToggle}
				className={cn(
					'relative w-12 h-6 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50',
					checked ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
				)}
			>
				<div
					className={cn(
						'absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200',
						checked ? 'translate-x-6' : 'translate-x-0.5'
					)}
				/>
			</button>
		</div>
	)
}
