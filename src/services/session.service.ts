import { AuthError } from '@supabase/supabase-js'

import { handleAuthError } from '@/utils/auth-error'

import { createClient } from '@/libs/supabase/client'

class SessionService {
	private supabase = createClient()

	async getSession() {
		try {
			const {
				data: { session },
				error
			} = await this.supabase.auth.getSession()

			if (error) {
				throw new AuthError(error.message, error.status)
			}

			return session
		} catch (error) {
			handleAuthError(error, 'Unexpected error getting session')
		}
	}

	async refreshSession() {
		try {
			const { data, error } = await this.supabase.auth.refreshSession()

			if (error) {
				throw new AuthError(error.message, error.status)
			}

			return data
		} catch (error) {
			handleAuthError(error, 'Unexpected error refreshing session')
		}
	}

	async isSessionValid(): Promise<boolean> {
		try {
			const session = await this.getSession()
			return !!session && new Date(session.expires_at!) > new Date()
		} catch {
			return false
		}
	}
}

export const sessionService = new SessionService()
