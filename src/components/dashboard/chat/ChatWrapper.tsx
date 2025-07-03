import { GradientOverlay } from '@/components/ui/glass/GradientOverlay'
import { InnerGlow } from '@/components/ui/glass/InnerGlow'

import { cn } from '@/utils/styles'

import { Chat } from './Chat'

interface Props {
	isOpen: boolean
}

export function ChatWrapper({ isOpen }: Props) {
	return (
		<aside
			className={cn(
				'relative h-full overflow-hidden border-l border-white/20 dark:border-white/10 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
				isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
			)}
		>
			<div className="absolute inset-0 backdrop-blur-xl bg-white/40 dark:bg-black/20">
				<GradientOverlay
					variant="tertiary"
					className="opacity-50"
				/>
				<InnerGlow />
			</div>

			<div className="relative z-10 h-full">
				<Chat />
			</div>
		</aside>
	)
}
