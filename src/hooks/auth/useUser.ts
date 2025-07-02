import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/constants/auth.constants'

import { QUERY_OPTIONS, createAuthRetry } from '@/config/query.config'

import { userService } from '@/services/user.service'

export function useUser() {
	return useQuery({
		queryKey: QUERY_KEYS.USER,
		queryFn: () => userService.getCurrentUser(),
		retry: createAuthRetry(),
		...QUERY_OPTIONS.USER
	})
}
