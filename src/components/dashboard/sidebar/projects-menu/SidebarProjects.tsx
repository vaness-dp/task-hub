import cn from 'clsx'
import Link from 'next/link'

import { PROJECTS } from './projects.data'

export function SidebarProjects() {
	return (
		<div className="mb-8">
			<ul className="space-y-2">
				{PROJECTS.map(project => (
					<li key={project.name}>
						<Link
							href={`/projects/${project.name || project.name.toLowerCase().replace(/\s+/g, '-')}`}
							className="flex items-center space-x-3 py-2.5 px-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors group"
						>
							<div className={cn(project.color, 'w-3 h-3 rounded-full flex-shrink-0')} />
							<span className="text-sm text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors truncate">
								{project.name}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
