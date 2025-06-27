'use client'

import { useState } from 'react'

import { mockChartData } from '@/components/dashboard/projects-statistic/projects-statistic.data'

export type Period = 'Monthly' | 'Yearly'

export function useProjectsStatistic() {
	const [selectedPeriod, setSelectedPeriod] = useState<Period>('Yearly')

	const data = mockChartData[selectedPeriod]

	return {
		selectedPeriod,
		setSelectedPeriod,
		data
	}
}
