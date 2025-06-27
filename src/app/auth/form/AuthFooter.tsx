export function AuthFooter() {
	return (
		<div className="text-center text-xs text-gray-500 dark:text-gray-400">
			<button className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors relative group">
				Terms of use
				<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-200 group-hover:w-full opacity-50" />
			</button>
			<span className="mx-2 text-gray-400 dark:text-gray-500">|</span>
			<button className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors relative group">
				Privacy policy
				<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-200 group-hover:w-full opacity-50" />
			</button>
		</div>
	)
}
