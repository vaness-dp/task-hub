'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
	const { theme, setTheme } = useTheme()

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<div className="fixed top-2.5 right-2.5 z-50">
			<button
				onClick={toggleTheme}
				className="p-2 rounded-full backdrop-blur-sm text-white bg-indigo-500 hover:bg-indigo-600 transition-all border border-neutral-200/10  shadow-sm"
			>
				{theme === 'dark' ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
			</button>
		</div>
	)
}
