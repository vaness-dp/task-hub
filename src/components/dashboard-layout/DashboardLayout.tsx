import type { PropsWithChildren } from 'react'

import { Sidebar } from './sidebar/Sidebar'

export function DashboardLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className="grid grid-cols-[250px_1fr] h-screen">
			<Sidebar />
			<main>{children}</main>
		</div>
	)
}
