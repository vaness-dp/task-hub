import { chartGradients } from '@/utils/chart.config'

export function ChartGradients() {
	return (
		<defs>
			{Object.entries(chartGradients).map(([key, gradient]) => (
				<linearGradient
					key={key}
					id={gradient.id}
					x1="0"
					y1="0"
					x2="0"
					y2="1"
				>
					<stop
						offset="5%"
						stopColor={gradient.colors[0]}
						stopOpacity={gradient.opacities[0]}
					/>
					<stop
						offset="95%"
						stopColor={gradient.colors[1]}
						stopOpacity={gradient.opacities[1]}
					/>
				</linearGradient>
			))}
		</defs>
	)
}
