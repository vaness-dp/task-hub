import * as m from 'framer-motion/m'

import { InnerGlow } from '@/components/ui/glass/InnerGlow'

import { modalField } from '@/constants/animations/modal/modal.animations'

interface Props {
	label: string
	value: string
	onChange: (value: string) => void
	type?: 'text' | 'date'
	placeholder?: string
	required?: boolean
}

export function TaskEditField({
	label,
	value,
	onChange,
	type = 'text',
	placeholder,
	required = false
}: Props) {
	return (
		<m.div
			variants={modalField}
			className="space-y-2"
		>
			<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
				{label}
				{required && <span className="text-red-500 ml-1">*</span>}
			</label>

			<div className="relative overflow-hidden rounded-2xl">
				<InnerGlow className="rounded-2xl pointer-events-none" />
				<div className="absolute inset-[1px] border border-white/40 dark:border-white/30 rounded-2xl pointer-events-none" />

				<input
					type={type}
					value={value}
					onChange={e => onChange(e.target.value)}
					placeholder={placeholder}
					className="w-full px-4 py-3 backdrop-blur-xl bg-white/60 dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 relative z-10"
				/>
			</div>
		</m.div>
	)
}
