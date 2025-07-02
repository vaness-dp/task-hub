import { useMutation, useQueryClient } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/constants/auth.constants'

import { mapSupabaseUserToIUser } from '@/utils/user.transforms'

import { sessionService } from '@/services/session.service'

export function useRefreshSession() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: () => sessionService.refreshSession(),
		onSuccess: data => {
			if (!data) {
				console.error('Session refresh returned no data')
				return
			}

			if (data.user) {
				const userData = mapSupabaseUserToIUser(data.user)
				queryClient.setQueryData(QUERY_KEYS.USER, userData)
			}
		},
		onError: (error: Error) => {
			console.error('Session refresh error:', error)
			queryClient.removeQueries({ queryKey: QUERY_KEYS.USER })
		}
	})
}
