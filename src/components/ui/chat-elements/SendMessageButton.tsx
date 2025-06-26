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
				'w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary/90 disabled:bg-neutral-300 dark:disabled:bg-neutral-600 disabled:cursor-not-allowed transition-colors',
				className
			)}
			{...props}
		>
			<Send className="w-4 h-4" />
		</button>
	)
}
