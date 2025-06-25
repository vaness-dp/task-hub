// components/dashboard-layout/chat/Chat.tsx
import Image from 'next/image'

import { ChatHeader } from './ChatHeader'
import { ChatInput } from './ChatInput'
import { ChatMessages } from './ChatMessages'

export function Chat() {
	return (
		<div className="h-screen bg-white dark:bg-neutral-800 border-l border-neutral-200 dark:border-neutral-700 flex flex-col">
			{/* Верхняя часть с изображением - 50% экрана */}
			<div className="h-[50vh] relative overflow-hidden">
				<Image
					src="/images/chat-bg.png"
					alt="Chat background"
					className="object-cover w-full h-full"
					width={500}
					height={500}
					priority
				/>
				{/* Современный градиентный оверлей */}
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 dark:to-neutral-900/20"></div>
			</div>

			{/* Нижняя часть с чатом - 50% экрана */}
			<div className="h-[50vh] bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 flex flex-col">
				<ChatHeader />
				<ChatMessages />
				<ChatInput />
			</div>
		</div>
	)
}
