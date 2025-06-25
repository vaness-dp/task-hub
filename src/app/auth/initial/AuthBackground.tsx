export function AuthBackground() {
	return (
		<div className="absolute inset-0 opacity-30">
			<div className="absolute left-10 top-20 w-32 h-32 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 rounded-2xl transform rotate-12" />
			<div className="absolute right-10 bottom-20 w-24 h-24 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 rounded-2xl transform -rotate-12" />
		</div>
	)
}
