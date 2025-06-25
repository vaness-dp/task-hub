import type { ReactNode } from 'react'

import { AuthHeading } from './AuthHeading'

interface Props {
	children: ReactNode
	heading: string
}

export function AuthWrapper({ children, heading }: Props) {
	return (
		<div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-2xl p-8">
			<AuthHeading>{heading}</AuthHeading>
			{children}
		</div>
	)
}
