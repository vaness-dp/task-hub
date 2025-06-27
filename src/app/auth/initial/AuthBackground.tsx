export function AuthBackground() {
	return (
		<div className="fixed inset-0 overflow-hidden">
			{/* Background: light for light theme, dark-gray for dark theme */}
			<div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-neutral-900 dark:to-slate-900" />

			{/* Animated spots */}
			{/* Light theme - bright colors */}
			<div className="absolute top-0 -left-4 w-96 h-96 bg-blue-300 dark:bg-emerald-500/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 dark:opacity-20 animate-blob" />
			<div className="absolute top-0 -right-4 w-96 h-96 bg-purple-300 dark:bg-teal-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 dark:opacity-15 animate-blob animation-delay-2000" />
			<div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 dark:bg-cyan-500/25 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 dark:opacity-18 animate-blob animation-delay-4000" />
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-200 dark:bg-green-500/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 dark:opacity-12 animate-blob animation-delay-6000" />

			{/* Additional dark layer for dark theme */}
			<div className="absolute inset-0 bg-transparent dark:bg-black/40" />
		</div>
	)
}
