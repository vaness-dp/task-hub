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
			{/* Enhanced gradient overlay with glass effect */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 dark:to-black/30 backdrop-blur-[1px]" />
			<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/40 dark:from-black/40 to-transparent" />
		</div>
	)
}
