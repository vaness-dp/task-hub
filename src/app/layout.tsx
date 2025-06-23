import type { Metadata } from 'next'
import { SUSE } from 'next/font/google'

import { Providers } from '@/providers/Providers'

import './globals.css'

const SUSE_FONT = SUSE({
	variable: '--font-suse',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'TaskHub',
	description: 'TaskHub is a task management tool that helps you manage your tasks and projects.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${SUSE_FONT.variable} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
