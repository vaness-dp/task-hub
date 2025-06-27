'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import cn from 'clsx'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
	const { theme, setTheme } = useTheme()

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<button
			onClick={toggleTheme}
			className="relative w-10 h-10 backdrop-blur-xl bg-white/40 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-lg group overflow-hidden"
			aria-label="Toggle theme"
		>
			{/* Effects */}
			<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 dark:from-white/8 dark:to-transparent rounded-2xl" />
			<div className="absolute inset-[1px] border border-white/40 rounded-2xl pointer-events-none dark:border-transparent" />

			{/* Decorative element */}
			<div className="absolute top-1 right-1 w-2 h-2 bg-white/15 dark:bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-300" />

			<div className="relative w-4 h-4 z-10">
				<SunIcon
					className={cn(
						'absolute inset-0 w-4 h-4 text-amber-500 transition-all duration-300 drop-shadow-sm',
						theme === 'dark' ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
					)}
				/>
				<MoonIcon
					className={cn(
						'absolute inset-0 w-4 h-4 text-blue-500 transition-all duration-300 drop-shadow-sm',
						theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
					)}
				/>
			</div>
		</button>
	)
}
