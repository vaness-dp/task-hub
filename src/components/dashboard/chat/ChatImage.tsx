import Image from 'next/image'

export function ChatImage() {
	return (
		<div className="h-[50vh] relative overflow-hidden">
			<Image
				src="/images/chat-bg.png"
				alt="Chat background"
				className="object-cover w-full h-full"
				width={500}
				height={500}
				priority
			/>
		</div>
	)
}
