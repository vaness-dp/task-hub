'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LazyMotion, domAnimation } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import { type ReactNode, useState } from 'react'
import { Toaster } from 'react-hot-toast'

export function Providers({ children }: { children: ReactNode }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						retry: 1,
						refetchOnWindowFocus: false,
						refetchOnMount: false,
						refetchInterval: false,
						networkMode: 'online'
					},
					mutations: {
						retry: 1
					}
				}
			})
	)

	return (
		<QueryClientProvider client={queryClient}>
			<LazyMotion features={domAnimation}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					{children}
				</ThemeProvider>
				<Toaster
					position="top-right"
					toastOptions={{
						duration: 4000,
						style: {
							background: '#262626',
							color: '#fff',
							border: '1px solid #404040'
						}
					}}
				/>
			</LazyMotion>
		</QueryClientProvider>
	)
}
