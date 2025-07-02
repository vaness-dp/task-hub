'use client'

import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts'

import { chartColors, chartMargins } from '@/config/chart.config'

import { ChartGradients } from './ChartGradients'
import { CustomTooltip } from './CustomTooltip'
import type { IChartData } from './projects-chart.types'

interface Props {
	data: IChartData[]
	period: 'Monthly' | 'Yearly'
}

export function ProjectsChart({ data }: Props) {
	return (
		<div className="w-full h-full">
			<ResponsiveContainer
				width="100%"
				height="100%"
			>
				<AreaChart
					data={data}
					margin={chartMargins}
				>
					<ChartGradients />

					<CartesianGrid
						strokeDasharray="3 3"
						stroke="currentColor"
						className="text-gray-200 dark:text-gray-700"
						opacity={0.3}
					/>

					<XAxis
						dataKey="name"
						axisLine={false}
						tickLine={false}
						tick={{
							fontSize: 11,
							fill: 'currentColor',
							className: 'text-gray-600 dark:text-gray-400'
						}}
						dy={10}
					/>

					<YAxis
						axisLine={false}
						tickLine={false}
						tick={{
							fontSize: 11,
							fill: 'currentColor',
							className: 'text-gray-600 dark:text-gray-400'
						}}
						dx={-10}
					/>

					<Tooltip content={<CustomTooltip />} />

					<Area
						type="monotone"
						dataKey="completed"
						stackId="1"
						stroke={chartColors.completed}
						strokeWidth={2}
						fill="url(#completedGradient)"
						name="completed"
					/>

					<Area
						type="monotone"
						dataKey="projects"
						stackId="1"
						stroke={chartColors.projects}
						strokeWidth={2}
						fill="url(#projectsGradient)"
						name="projects"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	)
}
