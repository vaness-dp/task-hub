import cn from 'clsx'
import { Eye, EyeOff } from 'lucide-react'
import type { InputHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

import { baseClasses, errorClasses, normalClasses } from '@/constants/field-classes'

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
			<div className="relative">
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
						className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
					>
						{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
					</button>
				)}
			</div>
			{hasError && error && <div className="text-red-500 text-sm mt-1">{error}</div>}
		</div>
	)
}
