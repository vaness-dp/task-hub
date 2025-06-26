import type { TextareaHTMLAttributes } from 'react'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	message: string
	setMessage: (message: string) => void
	handleSubmit: (e: React.FormEvent) => void
}

export function TextArea({ message, setMessage, handleSubmit }: Props) {
	return (
		<div className="flex-1 relative">
			<textarea
				value={message}
				onChange={e => setMessage(e.target.value)}
				placeholder="Type here..."
				rows={1}
				className="input-sm"
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
