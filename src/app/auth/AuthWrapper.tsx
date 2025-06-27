import type { ReactNode } from 'react'

import { AuthHeading } from './AuthHeading'

interface Props {
	children: ReactNode
	heading: string
}

export function AuthWrapper({ children, heading }: Props) {
	return (
		<div className="relative backdrop-blur-2xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl p-8 overflow-hidden">
			{/* Inner Glow */}
			<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 dark:from-white/5 dark:to-transparent rounded-3xl" />

			{/* Thin inner border */}
			<div className="absolute inset-[1px] border border-white/30 dark:border-white/20 rounded-3xl pointer-events-none" />

			{/* Content */}
			<div className="relative z-10">
				<AuthHeading>{heading}</AuthHeading>
				{children}
			</div>
		</div>
	)
}
