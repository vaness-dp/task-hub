'use client'

import type { PropsWithChildren } from 'react'

import { Sidebar } from '@/components/dashboard/sidebar/Sidebar'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className="grid grid-cols-[250px_1fr] h-screen">
			<Sidebar />
			<main>{children}</main>
		</div>
	)
}
