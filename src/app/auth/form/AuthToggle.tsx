import Link from 'next/link'

import { Pages } from '@/config/pages.config'

export function AuthToggle({ isLogin }: { isLogin: boolean }) {
	return (
		<div className="text-center mb-6">
			<span className="text-sm text-neutral-500 dark:text-neutral-400 mr-1">
				{isLogin ? "Don't have an account?" : 'Already have an account?'}
			</span>
			<Link
				href={isLogin ? Pages.REGISTER : Pages.LOGIN}
				className="text-sm text-text dark:text-text-secondary font-medium hover:text-primary transition-colors"
			>
				{isLogin ? 'Sign up' : 'Log in'}
			</Link>
		</div>
	)
}
