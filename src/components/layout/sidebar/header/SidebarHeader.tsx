'use client'

import { SidebarHeading } from '../SidebarHeading'

import { HeaderProfile } from './profile/HeaderProfile'

export function SidebarHeader() {
	return (
		<div className="mb-6">
			<SidebarHeading title="Account" />
			<HeaderProfile />
		</div>
	)
}
