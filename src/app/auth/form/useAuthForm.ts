import { useState } from 'react'
import { type RegisterOptions, useForm } from 'react-hook-form'

import {
	VALIDATION_MESSAGES,
	getEmailValidation,
	getPasswordValidation
} from '@/constants/validation.constants'

import { useLogin } from '@/hooks/auth/useLogin'
import { useRegister } from '@/hooks/auth/useRegister'

import type { IAuthForm } from './auth-form.types'

export function useAuthForm({ isLogin }: { isLogin: boolean }) {
	const [showPassword, setShowPassword] = useState(false)

	const loginMutation = useLogin()
	const registerMutation = useRegister()

	const form = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch
	} = form

	const handleFormSubmit = (data: IAuthForm) => {
		if (isLogin) {
			loginMutation.mutate({
				email: data.email,
				password: data.password
			})
		} else {
			registerMutation.mutate({
				email: data.email,
				password: data.password,
				confirmPassword: data.confirmPassword!
			})
		}
	}

	const isLoading = loginMutation.isPending || registerMutation.isPending

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword)
	}

	const confirmPasswordValidation: RegisterOptions<IAuthForm, 'confirmPassword'> = {
		required: VALIDATION_MESSAGES.CONFIRM_PASSWORD.REQUIRED,
		validate: (value: string | undefined) => {
			if (!value) return VALIDATION_MESSAGES.CONFIRM_PASSWORD.REQUIRED
			const password = watch('password')
			return value === password || VALIDATION_MESSAGES.CONFIRM_PASSWORD.MISMATCH
		}
	}

	const validationRules = {
		email: getEmailValidation(),
		password: getPasswordValidation(6),
		confirmPassword: confirmPasswordValidation
	}

	return {
		register,
		handleSubmit: handleSubmit(handleFormSubmit),
		errors,
		watch,
		showPassword,
		togglePasswordVisibility,
		isLoading,
		validationRules
	}
}
