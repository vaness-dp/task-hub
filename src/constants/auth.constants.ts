export const AUTH_ERRORS = {
	INVALID_CREDENTIALS: 'Invalid login credentials',
	USER_NOT_FOUND: 'User not found',
	EMAIL_ALREADY_EXISTS: 'User already registered',
	WEAK_PASSWORD: 'Password should be at least 6 characters',
	USER_NOT_AUTHENTICATED: 'User not authenticated'
} as const

export const QUERY_KEYS = {
	USER: ['user'] as const,
	SESSION: ['session'] as const
} as const

export const TOAST_MESSAGES = {
	LOGIN_SUCCESS: 'Successfully logged in!',
	LOGIN_FAILED: 'Login failed',
	REGISTER_SUCCESS: 'Account created successfully!',
	REGISTER_SUCCESS_WITH_LOGIN: 'Account created successfully! You are now logged in.',
	REGISTER_FAILED: 'Registration failed',
	LOGOUT_SUCCESS: 'Successfully logged out!',
	LOGOUT_FAILED: 'Logout failed'
} as const
