import { useRef, useState } from 'react'

export function useTimeline() {
	const [hoveredSlot, setHoveredSlot] = useState<number | null>(null)
	const containerRef = useRef<HTMLDivElement>(null)

	const handleSlotMouseEnter = (index: number) => {
		setHoveredSlot(index)
	}

	const handleSlotMouseLeave = () => {
		setHoveredSlot(null)
	}

	return {
		hoveredSlot,
		containerRef,
		handleSlotMouseEnter,
		handleSlotMouseLeave
	}
}
