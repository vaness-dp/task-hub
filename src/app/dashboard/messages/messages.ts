// types/messages.ts
export interface Chat {
	id: string
	name: string
	role: string
	avatar: string
	lastMessage: string
	time: string
	unread: number
	online: boolean
	members?: number
}

export interface Message {
	id: string
	text: string
	sender: string
	avatar: string
	time: string
	isOwn: boolean
	chatId: string
}
