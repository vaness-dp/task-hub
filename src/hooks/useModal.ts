import { useEffect } from 'react'

interface IUseModalOptions {
	isOpen: boolean
	onClose: () => void
	closeOnEscape?: boolean
}

export function useModal({ isOpen, onClose, closeOnEscape = true }: IUseModalOptions) {
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && closeOnEscape) {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEscape)
			document.body.style.overflow = 'hidden'
		}

		return () => {
			document.removeEventListener('keydown', handleEscape)
			document.body.style.overflow = 'unset'
		}
	}, [isOpen, onClose, closeOnEscape])
}
