import { AuthError } from '@supabase/supabase-js'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

import { QUERY_KEYS, TOAST_MESSAGES } from '@/constants/auth.constants'

import { Pages } from '@/config/pages.config'

import { authService } from '@/services/auth.service'

export function useLogout() {
	const router = useRouter()
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			toast.success(TOAST_MESSAGES.LOGOUT_SUCCESS)
			queryClient.removeQueries({ queryKey: QUERY_KEYS.USER })
			queryClient.removeQueries({ queryKey: QUERY_KEYS.SESSION })
			router.push(Pages.LOGIN)
		},
		onError: (error: Error) => {
			console.error('Logout error:', error)

			if (error instanceof AuthError) {
				toast.error(error.message)
			} else {
				toast.error(TOAST_MESSAGES.LOGOUT_FAILED)
			}
		}
	})
}
