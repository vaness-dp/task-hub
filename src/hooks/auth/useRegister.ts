import { AuthError } from '@supabase/supabase-js'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

import type { IAuthForm } from '@/app/auth/form/auth-form.types'

import { QUERY_KEYS, TOAST_MESSAGES } from '@/constants/auth.constants'

import { Pages } from '@/config/pages.config'

import { mapSupabaseUserToIUser } from '@/utils/user.transforms'

import { authService } from '@/services/auth.service'

export function useRegister() {
	const router = useRouter()
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (data: IAuthForm) => authService.register(data),
		onSuccess: authData => {
			if (!authData) {
				toast.error(TOAST_MESSAGES.REGISTER_FAILED)
				return
			}

			if (authData.user && authData.session) {
				toast.success(TOAST_MESSAGES.REGISTER_SUCCESS_WITH_LOGIN)

				const userData = mapSupabaseUserToIUser(authData.user)
				queryClient.setQueryData(QUERY_KEYS.USER, userData)
				router.push(Pages.DASHBOARD)
			} else {
				toast.success(TOAST_MESSAGES.REGISTER_SUCCESS)
				router.push(Pages.LOGIN)
			}
		},
		onError: (error: Error) => {
			console.error('Registration error:', error)

			if (error instanceof AuthError) {
				toast.error(error.message)
			} else {
				toast.error(TOAST_MESSAGES.REGISTER_FAILED)
			}
		}
	})
}
