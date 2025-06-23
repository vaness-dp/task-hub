import type { PropsWithChildren } from 'react'

import { Sidebar } from './sidebar/Sidebar'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<main className="flex min-h-screen flex-col">
			<Sidebar />
			{children}
		</main>
	)
}
