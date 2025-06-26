'use client'

import { useState } from 'react'

import { ChatArea } from './ChatArea'
import { MessagesHeader } from './MessagesHeader'
import { MessagesList } from './messages-list/MessagesList'

export function Messages() {
	const [selectedChat, setSelectedChat] = useState<string | null>('1')

	return (
		<div className="flex h-full bg-white dark:bg-neutral-800 shadow-sm overflow-hidden">
			{/* Left panel - list of chats */}
			<div className="w-80 border-r border-neutral flex flex-col">
				<MessagesHeader />
				<MessagesList
					selectedChat={selectedChat}
					onSelectChat={setSelectedChat}
				/>
			</div>

			{/* Right panel - chat area */}
			<div className="flex-1 flex flex-col">
				{selectedChat ? (
					<ChatArea chatId={selectedChat} />
				) : (
					<div className="flex-1 flex items-center justify-center">
						<div className="text-center text-secondary-content">
							<div className="w-16 h-16 bg-neutral-100 dark:bg-neutral-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
								<span className="text-2xl">💬</span>
							</div>
							<p>Select a conversation to start messaging</p>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
