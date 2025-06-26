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
			{/* Gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 dark:to-neutral-900/20" />
		</div>
	)
}
