import type { InputHTMLAttributes } from 'react'

import { InnerGlow } from '@/components/ui/glass/InnerGlow'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	error?: string
}

export function SettingsInput({ label, error, className = '', ...props }: Props) {
	return (
		<div className={className}>
			<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
				{label}
			</label>
			<div className="relative">
				<input
					className="w-full px-4 py-3 backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-white/40 dark:border-white/10 rounded-2xl text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
					{...props}
				/>
				<InnerGlow className="rounded-2xl pointer-events-none" />
			</div>
			{error && <p className="text-red-500 text-xs mt-2">{error}</p>}
		</div>
	)
}
