'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
	children: React.ReactNode
	containerId?: string
}

export function Portal({ children, containerId = 'portal-root' }: Props) {
	const [container, setContainer] = useState<HTMLElement | null>(null)

	useEffect(() => {
		let portalContainer = document.getElementById(containerId)

		if (!portalContainer) {
			portalContainer = document.createElement('div')
			portalContainer.id = containerId
			document.body.appendChild(portalContainer)
		}

		setContainer(portalContainer)

		return () => {
			// Cleanup: remove container if empty
			if (portalContainer && portalContainer.children.length === 0 && portalContainer.parentNode) {
				portalContainer.parentNode.removeChild(portalContainer)
			}
		}
	}, [containerId])

	if (!container) return null

	return createPortal(children, container)
}
