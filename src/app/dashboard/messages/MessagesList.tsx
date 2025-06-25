import { MessageItem } from './MessageItem'

interface MessagesListProps {
	selectedChat: string | null
	onSelectChat: (chatId: string) => void
}

const mockChats = [
	{
		id: '1',
		name: 'Sheila Dara',
		role: 'Project Manager',
		avatar: '👩‍💼',
		lastMessage: "Morning! I've been working on the design elements",
		time: '09:28 am',
		unread: 2,
		online: true
	},
	{
		id: '2',
		name: 'Chris Manuel',
		role: 'Developer',
		avatar: '👨‍💻',
		lastMessage: "That's great to hear! I've been focusing on market research",
		time: '09:47 am',
		unread: 0,
		online: true
	},
	{
		id: '3',
		name: 'Design Team',
		role: 'Team Chat',
		avatar: '🎨',
		lastMessage: 'New mockups are ready for review',
		time: '08:15 am',
		unread: 5,
		online: false
	},
	{
		id: '4',
		name: 'Alex Johnson',
		role: 'UI Designer',
		avatar: '👨‍🎨',
		lastMessage: 'The color palette looks amazing!',
		time: 'Yesterday',
		unread: 0,
		online: false
	}
]

export function MessagesList({ selectedChat, onSelectChat }: MessagesListProps) {
	return (
		<div className="flex-1 overflow-y-auto">
			<div className="p-4 space-y-2">
				{mockChats.map(chat => (
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
