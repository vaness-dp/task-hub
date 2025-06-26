import type { IMessage } from '@/types/messages.types'

export const MOCK_CHAT_MESSAGES: Record<string, IMessage[]> = {
	'1': [
		{
			id: '1',
			text: "Morning! I've been working on the design elements",
			sender: 'Sheila Dara',
			avatar: '👩‍💼',
			time: '09:28 am',
			isOwn: false
		},
		{
			id: '2',
			text: 'The new color palette looks great! What do you think about the typography?',
			sender: 'You',
			avatar: '👤',
			time: '09:30 am',
			isOwn: true
		},
		{
			id: '3',
			text: "I love the typography choice! It's very clean and modern. Should we proceed with this direction?",
			sender: 'Sheila Dara',
			avatar: '👩‍💼',
			time: '09:32 am',
			isOwn: false
		},
		{
			id: '4',
			text: "Absolutely! Let's move forward with this design",
			sender: 'You',
			avatar: '👤',
			time: '09:35 am',
			isOwn: true
		}
	],
	'2': [
		{
			id: '1',
			text: "That's great to hear! I've been focusing on market research",
			sender: 'Chris Manuel',
			avatar: '👨‍💻',
			time: '09:47 am',
			isOwn: false
		},
		{
			id: '2',
			text: 'Awesome! What are your findings so far?',
			sender: 'You',
			avatar: '👤',
			time: '09:50 am',
			isOwn: true
		}
	]
}
