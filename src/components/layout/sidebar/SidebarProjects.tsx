import cn from 'clsx'
import * as m from 'framer-motion/m'
import { useAtomValue } from 'jotai'

import { collapseAnimation } from '@/constants/animations'

import { isCollapsedAtom } from '@/store/sidebar.store'

import { PROJECTS } from './data/projects.data'

export function SidebarProjects() {
	const isCollapsed = useAtomValue(isCollapsedAtom)
	return (
		<m.div {...collapseAnimation(isCollapsed)}>
			<ul className="space-y-3 pl-4 mt-2.5">
				{PROJECTS.map(project => (
					<li
						key={project.name}
						className="flex items-center gap-2"
					>
						<div className={cn(project.color, 'w-3 h-3')} />
						<span className="text-neutral-500 dark:text-white">{project.name}</span>
					</li>
				))}
			</ul>
		</m.div>
	)
}
