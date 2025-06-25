import Image from 'next/image'

export function Profile() {
	return (
		<div>
			<Image
				src="/images/me.jpg"
				alt="photo of me"
				width={37}
				height={37}
				className="rounded-full shrink-0"
			/>
		</div>
	)
}
