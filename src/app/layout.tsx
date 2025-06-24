import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Providers } from '@/providers/Providers'

import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/constants'

import './globals.css'

const POPPINS_FONT = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900']
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
			<body className={`${POPPINS_FONT.variable} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
