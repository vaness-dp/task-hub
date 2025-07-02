import { InnerGlow } from '@/ui/glass/InnerGlow'

import { AuthHeading } from './AuthHeading'
import type { WithChildren } from '@/types'

interface Props extends WithChildren {
	heading: string
}

export function AuthWrapper({ children, heading }: Props) {
	return (
		<div className="relative backdrop-blur-2xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl p-8 overflow-hidden">
			<InnerGlow className="rounded-3xl" />

			<div className="relative z-10">
				<AuthHeading>{heading}</AuthHeading>
				{children}
			</div>
		</div>
	)
}
