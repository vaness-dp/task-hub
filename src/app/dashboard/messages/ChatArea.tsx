import { ChatInput } from '@/components/dashboard/chat/ChatInput'
import { ChatHeader } from '@/components/dashboard/chat/chat-header/ChatHeader'
import { ChatMessages } from '@/components/dashboard/chat/chat-messages/ChatMessages'

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
