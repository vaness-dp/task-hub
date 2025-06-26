import { AuthHeading } from '@/app/auth/AuthHeading'

import { Button } from '@/ui/Button'

import { Pages } from '@/config/pages.config'

import { AuthLogo } from './AuthLogo'

export function AuthInitial() {
	return (
		<div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-2xl p-8">
			<AuthLogo />

			<AuthHeading className="mb-2">
				Make the most of
				<br />
				what we offer.
			</AuthHeading>

			{/* Основные кнопки */}
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
	)
}
