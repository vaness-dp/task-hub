export interface IChat {
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

export interface IMessage {
	id: string
	text: string
	sender: string
	avatar: string
	time: string
	isOwn: boolean
	chatId?: string
	online: boolean
}
