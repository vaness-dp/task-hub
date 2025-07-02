import { AuthError } from '@supabase/supabase-js'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

import type { IAuthData } from '@/app/auth/form/auth-form.types'

import { QUERY_KEYS, TOAST_MESSAGES } from '@/constants/auth.constants'

import { Pages } from '@/config/pages.config'

import { mapSupabaseUserToIUser } from '@/utils/user.transforms'

import { authService } from '@/services/auth.service'

export function useLogin() {
	const router = useRouter()
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (data: IAuthData) => authService.login(data),
		onSuccess: authData => {
			if (!authData) {
				toast.error(TOAST_MESSAGES.LOGIN_FAILED)
				return
			}

			toast.success(TOAST_MESSAGES.LOGIN_SUCCESS)

			if (authData.user) {
				const userData = mapSupabaseUserToIUser(authData.user)
				queryClient.setQueryData(QUERY_KEYS.USER, userData)
			}

			router.push(Pages.DASHBOARD)
		},
		onError: (error: Error) => {
			console.error('Login error:', error)

			if (error instanceof AuthError) {
				toast.error(error.message)
			} else {
				toast.error(TOAST_MESSAGES.LOGIN_FAILED)
			}
		}
	})
}
