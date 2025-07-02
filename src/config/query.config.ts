export const QUERY_OPTIONS = {
	USER: {
		staleTime: 5 * 60 * 1000, // 5 min
		gcTime: 10 * 60 * 1000 // 10 min
	},

	REALTIME: {
		staleTime: 30 * 1000, // 30 sec
		gcTime: 2 * 60 * 1000 // 2 min
	},

	STATIC: {
		staleTime: 60 * 60 * 1000, // 1 h
		gcTime: 24 * 60 * 60 * 1000 // 24 h
	}
} as const

export const createAuthRetry = () => (failureCount: number, error: any) => {
	if (
		error?.message?.includes('not authenticated') ||
		error?.message?.includes('Invalid login credentials')
	) {
		return false
	}
	return failureCount < 2
}
