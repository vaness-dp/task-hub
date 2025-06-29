import cn from 'clsx'
import Link from 'next/link'

import type { IProject } from './project.types'

interface Props {
	project: IProject
}

export function ProjectsMenuItem({ project }: Props) {
	return (
		<li key={project.name}>
			<Link
				href={`/projects/${project.name || project.name.toLowerCase().replace(/\s+/g, '-')}`}
				className="sidebar-menu-item group"
			>
				<div className="relative z-10 flex items-center space-x-3 w-full">
					<div className={cn(project.color, 'w-3 h-3 rounded-full flex-shrink-0')} />
					<span className="text-sm text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors truncate">
						{project.name}
					</span>
				</div>
			</Link>
		</li>
	)
}
