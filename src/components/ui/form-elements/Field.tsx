import cn from 'clsx'
import { Eye, EyeOff } from 'lucide-react'
import type { InputHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

import { baseClasses, errorClasses, normalClasses } from '@/constants/field-classes'

import { InnerGlow } from '../glass/InnerGlow'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	error?: string
	hasError?: boolean
	showPassword?: boolean
	onTogglePassword?: () => void
	registration: UseFormRegisterReturn
}

export function Field({
	placeholder,
	error,
	hasError,
	showPassword,
	onTogglePassword,
	registration,
	type,
	...props
}: Props) {
	const inputType = type === 'password' && showPassword ? 'text' : type

	return (
		<div>
			<div className="relative overflow-hidden rounded-2xl">
				{/* Glass effects for input */}
				<InnerGlow className="rounded-2xl pointer-events-none" />
				<div className="absolute inset-[1px] border border-white/40 dark:border-white/30 rounded-2xl pointer-events-none" />

				<input
					type={inputType}
					placeholder={placeholder}
					className={cn(
						baseClasses,
						hasError ? errorClasses : normalClasses,
						type === 'password' ? 'pr-12' : ''
					)}
					{...registration}
					{...props}
				/>

				{type === 'password' && onTogglePassword && (
					<button
						type="button"
						onClick={onTogglePassword}
						className="absolute right-3 top-1/2 transform -translate-y-1/2 z-20 p-1 rounded-lg backdrop-blur-sm bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200"
					>
						{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
					</button>
				)}
			</div>

			{hasError && error && (
				<div className="text-red-400 dark:text-red-300 text-sm mt-2 px-3 py-2 backdrop-blur-sm bg-red-50/20 dark:bg-red-500/10 border border-red-200/30 dark:border-red-400/20 rounded-xl">
					{error}
				</div>
			)}
		</div>
	)
}
