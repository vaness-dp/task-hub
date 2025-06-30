export function ButtonAuthFooter({ text }: { text: string }) {
	return (
		<button className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors relative group">
			{text}
			<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-200 group-hover:w-full opacity-50" />
		</button>
	)
}
