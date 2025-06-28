import { Send } from 'lucide-react'
import type { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
}

export function SendMessageButton({ className, ...props }: Props) {
	return (
		<button
			type="submit"
			className={twMerge(
				'w-10 h-10 bg-gradient-to-r from-primary to-primary/90 text-white rounded-xl flex items-center justify-center hover:from-primary/90 hover:to-primary/80 disabled:from-gray-300 disabled:to-gray-400 dark:disabled:from-gray-600 dark:disabled:to-gray-700 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl relative overflow-hidden',
				className
			)}
			{...props}
		>
			{/* Effects */}
			<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 rounded-xl" />
			<Send className="w-4 h-4 relative z-10" />
		</button>
	)
}
