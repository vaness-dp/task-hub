import { ChatHeader } from '@/components/dashboard/chat/chat-header/ChatHeader'
import { ChatMessages } from '@/components/dashboard/chat/chat-messages/ChatMessages'

import { ChatImage } from './ChatImage'
import { ChatInput } from './ChatInput'

export function Chat() {
	return (
		<div className="h-screen backdrop-blur-xl bg-white/40 dark:bg-white/5 border-l border-white/30 dark:border-white/10 flex flex-col relative overflow-hidden">
			{/* Effects */}
			<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 dark:from-white/8 dark:to-transparent" />
			<div className="absolute inset-[1px] border-l border-white/40 pointer-events-none dark:border-transparent" />

			<div className="relative z-10 flex flex-col h-full">
				<ChatImage />

				<div className="h-[50vh] backdrop-blur-xl bg-white/30 dark:bg-white/3 flex flex-col relative overflow-hidden">
					{/* Effects for chat area */}
					<div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/8 dark:from-white/5 dark:to-transparent" />

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
