import { MoreHorizontal, Phone, Video } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import { ButtonAction } from '@/ui/chat-elements/ButtonAction'

interface Props {
	isSmall?: boolean
}

export function ButtonActions({ isSmall }: Props) {
	return (
		<div className="flex items-center space-x-2">
			<ButtonAction className={twMerge(isSmall && 'w-8 h-8')}>
				<Phone className="icon" />
			</ButtonAction>
			<ButtonAction className={twMerge(isSmall && 'w-8 h-8')}>
				<Video className="icon" />
			</ButtonAction>
			<ButtonAction className={twMerge(isSmall && 'w-8 h-8')}>
				<MoreHorizontal className="icon" />
			</ButtonAction>
		</div>
	)
}
