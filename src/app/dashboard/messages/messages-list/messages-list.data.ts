import type { IChat } from '../../../../types/messages.types'

export const MOCK_MESSAGES_LIST_DATA: IChat[] = [
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
