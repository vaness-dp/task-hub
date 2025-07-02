export const VALIDATION_PATTERNS = {
	EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
	PHONE: /^[\+]?[1-9][\d]{0,15}$/,
	PASSWORD_STRONG: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
} as const

export const VALIDATION_MESSAGES = {
	EMAIL: {
		REQUIRED: 'Email is required!',
		INVALID: 'Invalid email address'
	},
	PASSWORD: {
		REQUIRED: 'Password is required!',
		MIN_LENGTH: 'Password must be at least 6 characters',
		WEAK: 'Password must contain uppercase, lowercase, number and special character'
	},
	CONFIRM_PASSWORD: {
		REQUIRED: 'Confirm password is required!',
		MISMATCH: "Passwords don't match!"
	},
	GENERAL: {
		REQUIRED: 'This field is required!'
	}
} as const

export const getEmailValidation = () => ({
	required: VALIDATION_MESSAGES.EMAIL.REQUIRED,
	pattern: {
		value: VALIDATION_PATTERNS.EMAIL,
		message: VALIDATION_MESSAGES.EMAIL.INVALID
	}
})

export const getPasswordValidation = (minLength: number = 6) => ({
	required: VALIDATION_MESSAGES.PASSWORD.REQUIRED,
	minLength: {
		value: minLength,
		message: `Password must be at least ${minLength} characters`
	}
})
