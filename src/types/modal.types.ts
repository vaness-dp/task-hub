import type { ReactNode } from 'react'

export interface IModalProps {
	isOpen: boolean
	onClose: () => void
	children: ReactNode
	size?: TModalSize
	closeOnBackdrop?: boolean
	closeOnEscape?: boolean
}

export type TModalSize = 'sm' | 'md' | 'lg' | 'xl'

export interface IModalBackdropConfig {
	opacity: string
	onClick?: () => void
}

export interface IModalContentConfig {
	maxWidth: string
	maxHeight?: string
}
