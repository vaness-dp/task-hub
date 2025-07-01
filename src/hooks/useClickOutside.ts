import { useEffect, useRef, useState } from 'react'

export const useClickOutside = (initialOpen = false) => {
	const [isOpen, setIsOpen] = useState(initialOpen)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!isOpen) return

		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [isOpen])

	return { isOpen, setIsOpen, ref }
}
