import { AuthHeading } from '@/app/auth/AuthHeading'

import { Button } from '@/ui/Button'

import { Pages } from '@/config/pages.config'

import { AuthLogo } from './AuthLogo'

export function AuthInitial() {
	return (
		<div className="relative">
			{/* Container */}
			<div className="relative backdrop-blur-2xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl p-8 overflow-hidden">
				{/* Inner glow */}
				<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 dark:from-white/5 dark:to-transparent rounded-3xl" />

				<div className="relative z-10">
					<AuthLogo />

					<AuthHeading className="mb-2 text-gray-900 dark:text-white">
						Make the most of
						<br />
						what we offer.
					</AuthHeading>

					<div className="space-y-3 mb-6">
						<Button
							variant="primary"
							href={Pages.LOGIN}
						>
							Log in
						</Button>

						<Button
							variant="secondary"
							href={Pages.REGISTER}
						>
							Sign up for free
						</Button>
					</div>

					<div className="text-center">
						<button className="text-sm text-secondary-content hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">
							Stay logged out
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
