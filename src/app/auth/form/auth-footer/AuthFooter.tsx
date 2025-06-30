import { ButtonAuthFooter } from './ButtonAuthFooter'

export function AuthFooter() {
	return (
		<div className="text-center text-xs text-gray-500 dark:text-gray-400">
			<ButtonAuthFooter text="Terms of use" />
			<span className="mx-2 text-gray-400 dark:text-gray-500">|</span>
			<ButtonAuthFooter text="Privacy policy" />
		</div>
	)
}
