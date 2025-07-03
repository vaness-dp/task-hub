import type { TModalSize } from '@/types/modal.types'

export const MODAL_SIZE_CONFIG: Record<TModalSize, { maxWidth: string; maxHeight?: string }> = {
	sm: { maxWidth: 'max-w-md' },
	md: { maxWidth: 'max-w-xl' },
	lg: { maxWidth: 'max-w-2xl', maxHeight: 'max-h-[90vh]' },
	xl: { maxWidth: 'max-w-4xl', maxHeight: 'max-h-[90vh]' }
}

export const MODAL_BACKDROP_CONFIG = {
	light: 'bg-black/40',
	medium: 'bg-black/50',
	dark: 'bg-black/60'
} as const

export type TModalBackdropOpacity = keyof typeof MODAL_BACKDROP_CONFIG
