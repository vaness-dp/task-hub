import * as m from 'framer-motion/m'
import { useAtomValue } from 'jotai'

import { collapseAnimation } from '@/constants/animations'

import { isCollapsedAtom } from '@/store/sidebar.store'

interface Props {
	title: string
}

export function SidebarHeading({ title }: Props) {
	const isCollapsed = useAtomValue(isCollapsedAtom)
	return (
		<m.div
			className="font-medium text-neutral-400 opacity-70 dark:text-white"
			{...collapseAnimation(isCollapsed)}
		>
			{title}
		</m.div>
	)
}
