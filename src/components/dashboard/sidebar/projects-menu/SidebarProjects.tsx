import { ProjectsMenuItem } from './ProjectsMenuItem'
import { PROJECTS } from './projects.data'

export function SidebarProjects() {
	return (
		<div className="mb-8">
			<ul className="space-y-2">
				{PROJECTS.map(project => (
					<ProjectsMenuItem
						key={project.name}
						project={project}
					/>
				))}
			</ul>
		</div>
	)
}
