import { Send } from 'lucide-react'
import type { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

import { GradientOverlay } from '../glass/GradientOverlay'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
}

export function SendMessageButton({ className, ...props }: Props) {
	return (
		<button
			type="submit"
			className={twMerge('send-message-button', className)}
			{...props}
		>
			<GradientOverlay variant="secondary" />
			<Send className="w-4 h-4 relative z-10" />
		</button>
	)
}
