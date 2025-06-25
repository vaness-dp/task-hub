import { ChatHeader } from './ChatHeader'
import { ChatInput } from './ChatInput'
import { ChatMessages } from './ChatMessages'

interface ChatAreaProps {
	chatId: string
}

export function ChatArea({ chatId }: ChatAreaProps) {
	return (
		<div className="flex flex-col h-full">
			<ChatHeader chatId={chatId} />
			<ChatMessages chatId={chatId} />
			<ChatInput />
		</div>
	)
}
