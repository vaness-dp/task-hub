import * as m from 'framer-motion/m'
import { ChevronDown } from 'lucide-react'

import { InnerGlow } from '@/components/ui/glass/InnerGlow'

import { modalField } from '@/constants/animations/modal/modal.animations'

import { cn } from '@/utils/styles'

interface IOption {
	value: string
	label: string
	color: string
}

interface Props {
	label: string
	value: string
	onChange: (value: string) => void
	options?: IOption[]
	required?: boolean
}

const STATUS_OPTIONS: IOption[] = [
	{ value: 'todo', label: 'Todo', color: 'bg-gray-500' },
	{ value: 'in-progress', label: 'In Progress', color: 'bg-violet-500' },
	{ value: 'review', label: 'Review', color: 'bg-rose-500' },
	{ value: 'completed', label: 'Completed', color: 'bg-emerald-500' }
]

export function TaskEditSelect({
	label,
	value,
	onChange,
	options = STATUS_OPTIONS,
	required = false
}: Props) {
	const selectedOption = options.find(option => option.value === value)

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

				<select
					value={value}
					onChange={e => onChange(e.target.value)}
					className="w-full px-4 py-3 backdrop-blur-xl bg-white/60 dark:bg-white/5 text-gray-900 dark:text-white border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 relative z-10 appearance-none cursor-pointer"
				>
					{options.map(option => (
						<option
							key={option.value}
							value={option.value}
						>
							{option.label}
						</option>
					))}
				</select>

				{/* Status indicator and chevron */}
				<div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 pointer-events-none z-20">
					{selectedOption && <div className={cn('w-3 h-3 rounded-full', selectedOption.color)} />}
					<ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
				</div>
			</div>
		</m.div>
	)
}
