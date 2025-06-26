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

interface ChartData {
	name: string
	projects: number
	completed: number
}

interface ProjectsChartProps {
	data: ChartData[]
	period: 'Monthly' | 'Yearly'
}

export function ProjectsChart({ data, period }: ProjectsChartProps) {
	return (
		<div className="w-full h-full">
			<ResponsiveContainer
				width="100%"
				height="100%"
			>
				<AreaChart
					data={data}
					margin={{
						top: 10,
						right: 10,
						left: 10,
						bottom: 10
					}}
				>
					<defs>
						<linearGradient
							id="projectsGradient"
							x1="0"
							y1="0"
							x2="0"
							y2="1"
						>
							<stop
								offset="5%"
								stopColor="#806df2"
								stopOpacity={0.4}
							/>
							<stop
								offset="95%"
								stopColor="#806df2"
								stopOpacity={0.1}
							/>
						</linearGradient>
						<linearGradient
							id="completedGradient"
							x1="0"
							y1="0"
							x2="0"
							y2="1"
						>
							<stop
								offset="5%"
								stopColor="#10b981"
								stopOpacity={0.4}
							/>
							<stop
								offset="95%"
								stopColor="#10b981"
								stopOpacity={0.1}
							/>
						</linearGradient>
					</defs>

					<CartesianGrid
						strokeDasharray="3 3"
						stroke="currentColor"
						className="text-neutral-200 dark:text-neutral-700"
						opacity={0.3}
					/>

					<XAxis
						dataKey="name"
						axisLine={false}
						tickLine={false}
						tick={{
							fontSize: 11,
							fill: 'currentColor',
							className: 'text-secondary-content'
						}}
						dy={10}
					/>

					<YAxis
						axisLine={false}
						tickLine={false}
						tick={{
							fontSize: 11,
							fill: 'currentColor',
							className: 'text-secondary-content'
						}}
						dx={-10}
					/>

					<Tooltip
						content={({ active, payload, label }) => {
							if (active && payload && payload.length) {
								return (
									<div className="bg-white dark:bg-neutral-800 border border-neutral rounded-2xl p-4 shadow-lg">
										<p className="text-sm font-semibold text-primary-content mb-3">{label}</p>
										<div className="space-y-2">
											{payload.map((entry, index) => (
												<div
													key={index}
													className="flex items-center justify-between space-x-4"
												>
													<div className="flex items-center space-x-2">
														<div
															className="w-3 h-3 rounded-full"
															style={{ backgroundColor: entry.color }}
														/>
														<span className="text-xs text-secondary-content">
															{entry.dataKey === 'projects' ? 'Total Projects' : 'Completed'}
														</span>
													</div>
													<span className="text-sm font-medium text-primary-content">
														{entry.value}
													</span>
												</div>
											))}
										</div>
									</div>
								)
							}
							return null
						}}
					/>

					<Area
						type="monotone"
						dataKey="completed"
						stackId="1"
						stroke="#10b981"
						strokeWidth={2}
						fill="url(#completedGradient)"
						name="completed"
					/>

					<Area
						type="monotone"
						dataKey="projects"
						stackId="1"
						stroke="#806df2"
						strokeWidth={2}
						fill="url(#projectsGradient)"
						name="projects"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	)
}
