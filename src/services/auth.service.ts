import { AuthError } from '@supabase/supabase-js'

import type { IAuthData, IAuthForm } from '@/app/auth/form/auth-form.types'

import { getErrorMessage, handleAuthError } from '@/utils/auth-error'
import { createUserMetadata } from '@/utils/user.transforms'

import { createClient } from '@/libs/supabase/client'

class AuthService {
	private supabase = createClient()

	async login(data: IAuthData) {
		try {
			const { data: authData, error } = await this.supabase.auth.signInWithPassword({
				email: data.email,
				password: data.password
			})

			if (error) {
				const errorMessage = getErrorMessage(error.message)
				throw new AuthError(errorMessage, error.status)
			}

			return authData
		} catch (error) {
			handleAuthError(error, 'Unexpected error during login')
		}
	}

	async register(data: IAuthForm) {
		try {
			const { data: authData, error } = await this.supabase.auth.signUp({
				email: data.email,
				password: data.password,
				options: {
					data: createUserMetadata(data.email)
				}
			})

			if (error) {
				const errorMessage = getErrorMessage(error.message)
				throw new AuthError(errorMessage, error.status)
			}

			return authData
		} catch (error) {
			handleAuthError(error, 'Unexpected error during registration')
		}
	}

	async logout() {
		try {
			const { error } = await this.supabase.auth.signOut()

			if (error) {
				throw new AuthError(error.message, error.status)
			}
		} catch (error) {
			handleAuthError(error, 'Unexpected error during logout')
		}
	}
}

export const authService = new AuthService()
