import type { Metadata } from 'next'
import { SUSE } from 'next/font/google'

import { SITE_DESCRIPTION, SITE_NAME } from '@/constants'
import { Providers } from '@/providers'

import './globals.css'

const SUSE_FONT = SUSE({
	variable: '--font-suse',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
	icons: {
		icon: '/images/favicon.svg',
		shortcut: '/images/favicon.svg'
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: SITE_DESCRIPTION
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body className={`${SUSE_FONT.variable} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
