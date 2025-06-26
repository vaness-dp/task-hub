import { MessageItem } from './MessageItem'
import { MOCK_MESSAGES_LIST_DATA } from './messages-list.data'

interface Props {
	selectedChat: string | null
	onSelectChat: (chatId: string) => void
}

export function MessagesList({ selectedChat, onSelectChat }: Props) {
	return (
		<div className="flex-1 overflow-y-auto">
			<div className="p-4 space-y-2">
				{MOCK_MESSAGES_LIST_DATA.map(chat => (
					<MessageItem
						key={chat.id}
						chat={chat}
						isSelected={selectedChat === chat.id}
						onClick={() => onSelectChat(chat.id)}
					/>
				))}
			</div>
		</div>
	)
}
