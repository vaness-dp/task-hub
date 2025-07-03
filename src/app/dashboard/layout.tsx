import type { PropsWithChildren } from 'react'

import { Sidebar } from '@/components/dashboard/sidebar/Sidebar'

export default function DashboardLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className="relative h-screen overflow-hidden">
			<div className="grid h-full grid-cols-[250px_1fr]">
				<Sidebar />
				<main className="overflow-hidden">{children}</main>
			</div>
		</div>
	)
}
