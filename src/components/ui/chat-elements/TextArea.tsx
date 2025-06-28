import type { TextareaHTMLAttributes } from 'react'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	message: string
	setMessage: (message: string) => void
	handleSubmit: (e: React.FormEvent) => void
}

export function TextArea({ message, setMessage, handleSubmit }: Props) {
	return (
		<div className="flex-1 relative overflow-hidden rounded-2xl">
			{/* Effects */}
			<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 dark:from-white/5 dark:to-transparent rounded-2xl" />
			<div className="absolute inset-[1px] border border-white/40 rounded-2xl pointer-events-none dark:border-transparent" />

			<textarea
				value={message}
				onChange={e => setMessage(e.target.value)}
				placeholder="Type here..."
				rows={1}
				className="w-full px-4 py-3 backdrop-blur-xl bg-white/40 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 hover:bg-white/50 dark:hover:bg-white/8 resize-none relative z-10"
				onKeyDown={e => {
					if (e.key === 'Enter' && !e.shiftKey) {
						e.preventDefault()
						handleSubmit(e)
					}
				}}
			/>
		</div>
	)
}
