interface Props {
	title: string
}

export function SidebarHeading({ title }: Props) {
	return (
		<div className="font-medium mb-1.5 text-neutral-400 opacity-70 dark:text-white">{title}</div>
	)
}
