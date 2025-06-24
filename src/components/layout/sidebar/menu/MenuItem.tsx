import cn from 'clsx'
import * as m from 'framer-motion/m'
import { useAtomValue } from 'jotai'
import Link from 'next/link'

import { collapseAnimation } from '@/constants/animations'

import { isCollapsedAtom } from '@/store/sidebar.store'

import type { IMenuItem } from './menu.types'

interface Props {
	item: IMenuItem
	isActive: boolean
}

export function MenuItem({ item, isActive }: Props) {
	const isCollapsed = useAtomValue(isCollapsedAtom)

	return (
		<li key={item.href}>
			<Link
				href={item.href}
				className={cn(
					'text-neutral-500 dark:text-white flex items-center justify-between hover:text-neutral-900 dark:hover:text-primary transition-colors rounded-full py-2.5 px-3',
					isActive && 'bg-primary text-white hover:text-white dark:hover:text-white'
				)}
			>
				<span className="flex items-center gap-2">
					<item.icon size={20} />
					<m.span {...collapseAnimation(isCollapsed)}>{item.label}</m.span>
				</span>
				{item.label === 'Messages' && (
					<m.span
						className="text-primary bg-[#dcdef6] rounded-lg px-2 text-xs font-medium"
						{...collapseAnimation(isCollapsed)}
					>
						4
					</m.span>
				)}
			</Link>
		</li>
	)
}
