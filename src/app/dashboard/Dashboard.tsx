'use client'

import Image from 'next/image'

import { Heading } from '@/ui/Heading'
import { SearchField } from '@/ui/search-field/SearchField'

import { Profile } from './profile/Profile'
import { ProjectStats } from './project-stats/ProjectStats'

export function Dashboard() {
	return (
		<div className="grid grid-cols-[1fr_370px] -m-5">
			<div className="p-5">
				<div className="flex items-center justify-between mb-8">
					<Heading>Dashboard</Heading>
					<div className="flex items-center justify-between gap-3">
						<SearchField
							onChange={() => {}}
							value=""
						/>
						<Profile />
					</div>
				</div>
				<div className="grid grid-cols-[25%_75%] gap-6">
					<ProjectStats />
				</div>
			</div>

			<div className="h-screen">
				<div className="h-[55%] w-full">
					<Image
						src="/images/chat-bg.png"
						alt="Chat background"
						className="object-cover w-full h-full"
						width={500}
						height={500}
						priority
					/>
				</div>
				<div className="h-[45%] bg-indigo-900 text-white">
					<div className="p-5">
						{/* Здесь будет компонент чата */}
						CHAT
					</div>
				</div>
			</div>
		</div>
	)
}
