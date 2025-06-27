import Link from 'next/link'

import { Pages } from '@/config/pages.config'

export function AuthToggle({ isLogin }: { isLogin: boolean }) {
	return (
		<div className="text-center mb-6">
			<span className="text-sm text-gray-600 dark:text-gray-400 mr-1">
				{isLogin ? "Don't have an account?" : 'Already have an account?'}
			</span>
			<Link
				href={isLogin ? Pages.REGISTER : Pages.LOGIN}
				className="text-sm text-primary font-medium hover:text-primary/80 transition-colors relative group"
			>
				{isLogin ? 'Sign up' : 'Log in'}
				<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
			</Link>
		</div>
	)
}
