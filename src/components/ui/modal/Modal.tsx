'use client'

import { AnimatePresence } from 'framer-motion'
import * as m from 'framer-motion/m'

import { GradientOverlay } from '@/components/ui/glass/GradientOverlay'
import { InnerGlow } from '@/components/ui/glass/InnerGlow'

import { modalBackdrop, modalContent } from '@/constants/animations/modal/modal.animations'

import {
	MODAL_BACKDROP_CONFIG,
	MODAL_SIZE_CONFIG,
	type TModalBackdropOpacity
} from '@/config/modal.config'

import { useModal } from '@/hooks/useModal'

import { cn } from '@/utils/styles'

import type { IModalProps } from '@/types/modal.types'

import { Portal } from './Portal'

interface Props extends IModalProps {
	backdropOpacity?: TModalBackdropOpacity
}

export function Modal({
	isOpen,
	onClose,
	children,
	size = 'md',
	closeOnBackdrop = true,
	closeOnEscape = true,
	backdropOpacity = 'medium'
}: Props) {
	useModal({ isOpen, onClose, closeOnEscape })

	const sizeConfig = MODAL_SIZE_CONFIG[size]
	const backdropClass = MODAL_BACKDROP_CONFIG[backdropOpacity]

	return (
		<Portal>
			<AnimatePresence>
				{isOpen && (
					<>
						<m.div
							variants={modalBackdrop}
							initial="initial"
							animate="animate"
							exit="exit"
							className={cn(
								'fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4',
								backdropClass
							)}
							onClick={closeOnBackdrop ? onClose : undefined}
						/>

						<m.div
							variants={modalContent}
							initial="initial"
							animate="animate"
							exit="exit"
							className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
						>
							<div
								className={cn(
									'w-full',
									sizeConfig.maxWidth,
									sizeConfig.maxHeight || '',
									'backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-white/30 dark:border-white/20 rounded-3xl shadow-2xl pointer-events-auto relative overflow-hidden'
								)}
								onClick={e => e.stopPropagation()}
							>
								<GradientOverlay
									variant="primary"
									className="rounded-3xl"
								/>
								<InnerGlow className="rounded-3xl" />

								<div
									className={cn(
										'relative z-10',
										sizeConfig.maxHeight ? 'flex flex-col h-full' : ''
									)}
								>
									{children}
								</div>
							</div>
						</m.div>
					</>
				)}
			</AnimatePresence>
		</Portal>
	)
}
