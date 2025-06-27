interface Props {
	title: string
}

export function SidebarHeading({ title }: Props) {
	return (
		<div className="mb-4 mt-8 first:mt-0">
			<h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-4">
				{title}
			</h3>
		</div>
	)
}
