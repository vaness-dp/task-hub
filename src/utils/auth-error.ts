import { AuthError } from '@supabase/supabase-js'

import { AUTH_ERRORS } from '@/constants/auth.constants'

export const getErrorMessage = (errorMessage: string): string => {
	if (errorMessage.includes('Invalid login credentials')) {
		return AUTH_ERRORS.INVALID_CREDENTIALS
	}
	if (errorMessage.includes('User not found')) {
		return AUTH_ERRORS.USER_NOT_FOUND
	}
	if (errorMessage.includes('User already registered')) {
		return AUTH_ERRORS.EMAIL_ALREADY_EXISTS
	}
	if (errorMessage.includes('Password should be at least')) {
		return AUTH_ERRORS.WEAK_PASSWORD
	}

	return errorMessage
}

export const handleAuthError = (error: unknown, fallbackMessage: string): never => {
	console.error('Auth error:', error)

	if (error instanceof AuthError) {
		throw error
	}
	if (error instanceof Error) {
		throw new Error(error.message)
	}
	throw new Error(fallbackMessage)
}

export const handleAuthErrorSafe = (error: unknown, fallbackMessage: string): null => {
	console.error('Auth error (safe):', error)

	if (error instanceof AuthError) {
		console.error('AuthError:', error.message)
	} else if (error instanceof Error) {
		console.error('Error:', error.message)
	} else {
		console.error('Unknown error:', fallbackMessage)
	}

	return null
}
