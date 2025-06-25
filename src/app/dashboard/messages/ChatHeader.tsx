// components/messages/ChatHeader.tsx
import { MoreHorizontal, Phone, Users, Video } from 'lucide-react'

interface ChatHeaderProps {
	chatId: string
}

const mockChatData = {
	'1': {
		name: 'Sheila Dara',
		role: 'Project Manager',
		avatar: '👩‍💼',
		online: true,
		members: 1
	},
	'2': {
		name: 'Chris Manuel',
		role: 'Developer',
		avatar: '👨‍💻',
		online: true,
		members: 1
	},
	'3': {
		name: 'Design Team',
		role: 'Team Chat',
		avatar: '🎨',
		online: false,
		members: 5
	}
}

export function ChatHeader({ chatId }: ChatHeaderProps) {
	const chat = mockChatData[chatId as keyof typeof mockChatData]

	if (!chat) return null

	return (
		<div className="p-6 border-b border-neutral-200 dark:border-neutral-700">
			<div className="flex items-center justify-between">
				{/* Информация о чате */}
				<div className="flex items-center space-x-3">
					<div className="relative">
						<div className="w-12 h-12 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-600 dark:to-neutral-700 rounded-2xl flex items-center justify-center text-lg">
							{chat.avatar}
						</div>
						{chat.online && (
							<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-neutral-800"></div>
						)}
					</div>

					<div>
						<h2 className="font-semibold text-[#2a2a2a] dark:text-[#f5f5f5]">{chat.name}</h2>
						<div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
							<span>{chat.role}</span>
							{chat.members > 1 && (
								<>
									<span>•</span>
									<div className="flex items-center space-x-1">
										<Users className="w-3 h-3" />
										<span>{chat.members} members</span>
									</div>
								</>
							)}
						</div>
					</div>
				</div>

				{/* Действия */}
				<div className="flex items-center space-x-2">
					<button className="w-10 h-10 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
						<Phone className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
					</button>
					<button className="w-10 h-10 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
						<Video className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
					</button>
					<button className="w-10 h-10 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
						<MoreHorizontal className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
					</button>
				</div>
			</div>
		</div>
	)
}
