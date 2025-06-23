'use client'

import Link from 'next/link'

export function HeaderProfile() {
	return (
		<div className="relative flex items-center bg-gray-light rounded-full px-2 py-1.5">
			<Link
				href="/settings"
				className="shrink-0 flex items-center gap-2"
				aria-label="Open settings"
			>
				<div className="rounded-full bg-purple-dark p-4"></div>
				<div className="flex flex-col text-xs">
					<span className="text-black font-bold text-sm">Ivan Krylov</span>
					<span>krylov_dev@mail.ru</span>
				</div>
			</Link>
		</div>
	)
}
