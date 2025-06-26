import { ChatHeader } from '@/components/dashboard/chat/chat-header/ChatHeader'
import { ChatMessages } from '@/components/dashboard/chat/chat-messages/ChatMessages'

import { ChatImage } from './ChatImage'
import { ChatInput } from './ChatInput'

export function Chat() {
	return (
		<div className="h-screen bg-white dark:bg-neutral-800 border-l border-neutral flex flex-col">
			<ChatImage />

			<div className="h-[50vh] bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 flex flex-col">
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
	)
}
