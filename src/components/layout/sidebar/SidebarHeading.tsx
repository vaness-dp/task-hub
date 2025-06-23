interface Props {
	title: string
}

export function SidebarHeading({ title }: Props) {
	return <div className="mb-1 text-gray">{title}</div>
}
