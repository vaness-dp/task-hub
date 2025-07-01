import { ChatHeader } from '@/components/dashboard/chat/chat-header/ChatHeader'
import { ChatMessages } from '@/components/dashboard/chat/chat-messages/ChatMessages'

import { GradientOverlay } from '@/ui/glass/GradientOverlay'

import { ChatImage } from './ChatImage'
import { ChatInput } from './ChatInput'

export function Chat() {
	return (
		<div className="h-screen backdrop-blur-xl dark:bg-neutral-800/50 border-l border-white/30 dark:border-white/10 flex flex-col relative overflow-hidden">
			<GradientOverlay variant="tertiary" />

			<div className="relative z-10 flex flex-col h-full">
				<ChatImage />

				<div className="h-[50vh] backdrop-blur-xl bg-white/30 dark:bg-neutral-800/80 flex flex-col relative overflow-hidden">
					<div className="relative z-10 flex flex-col h-full">
						<ChatHeader
							chatId="1"
							isSmall
						/>
						<ChatMessages
							chatId="1"
							isSmall
						/>
						<ChatInput isSmall />
					</div>
				</div>
			</div>
		</div>
	)
}
