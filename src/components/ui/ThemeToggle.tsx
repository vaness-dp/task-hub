'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import cn from 'clsx'
import { useTheme } from 'next-themes'

import { InnerGlow } from './glass/InnerGlow'

export function ThemeToggle() {
	const { theme, setTheme } = useTheme()

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<button
			onClick={toggleTheme}
			className="theme-toggle"
			aria-label="Toggle theme"
		>
			<InnerGlow className="rounded-2xl" />

			<div className="relative w-4 h-4 z-10">
				<SunIcon
					className={cn(
						'absolute inset-0 w-4 h-4 text-amber-500 transition-all duration-300',
						theme === 'dark' ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
					)}
				/>
				<MoonIcon
					className={cn(
						'absolute inset-0 w-4 h-4 text-blue-500 transition-all duration-300',
						theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
					)}
				/>
			</div>
		</button>
	)
}
