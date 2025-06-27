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
							className="flex items-center space-x-3 py-2.5 px-4 rounded-2xl backdrop-blur-xl hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-200 group origin-center hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
						>
							{/* Effect only on hover */}
							<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 dark:from-white/8 dark:to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

							<div className="relative z-10 flex items-center space-x-3 w-full">
								<div className={cn(project.color, 'w-3 h-3 rounded-full flex-shrink-0')} />
								<span className="text-sm text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors truncate">
									{project.name}
								</span>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
