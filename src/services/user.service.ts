import { AuthError } from '@supabase/supabase-js'

import { handleAuthError, handleAuthErrorSafe } from '@/utils/auth-error'
import { mapSupabaseUserToIUser } from '@/utils/user.transforms'

import type { IUser } from '@/types/profile.types'

import { createClient } from '@/libs/supabase/client'

import { sessionService } from './session.service'

class UserService {
	private supabase = createClient()

	async getCurrentUser(): Promise<IUser | null> {
		try {
			const session = await sessionService.getSession()

			if (!session) {
				return null
			}

			const {
				data: { user },
				error
			} = await this.supabase.auth.getUser()

			if (error) {
				if (error.message.includes('not authenticated')) {
					return null
				}
				throw new AuthError(error.message, error.status)
			}

			if (!user) {
				return null
			}

			return mapSupabaseUserToIUser(user)
		} catch (error) {
			if (error instanceof AuthError && error.message.includes('not authenticated')) {
				return null
			}

			return handleAuthErrorSafe(error, 'Unexpected error getting user')
		}
	}

	async updateUserMetadata(metadata: Record<string, any>) {
		try {
			const { data, error } = await this.supabase.auth.updateUser({
				data: metadata
			})

			if (error) {
				throw new AuthError(error.message, error.status)
			}

			return data
		} catch (error) {
			handleAuthError(error, 'Unexpected error updating user')

			return undefined
		}
	}
}

export const userService = new UserService()
