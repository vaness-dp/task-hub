'use client'

import { AuthFooter } from '@/app/auth/form/auth-footer/AuthFooter'

import { Field } from '@/components/ui/form-elements/Field'

import { AuthButton } from '@/ui/AuthButton'

import { AuthToggle } from './AuthToggle'
import { useAuthForm } from './useAuthForm'

export const AuthForm = ({ isLogin }: { isLogin: boolean }) => {
	const {
		register,
		handleSubmit,
		errors,
		showPassword,
		togglePasswordVisibility,
		isLoading,
		validationRules
	} = useAuthForm({ isLogin })

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-4"
		>
			<div className="space-y-4">
				<Field
					type="email"
					registration={register('email', validationRules.email)}
					error={errors.email?.message}
					hasError={!!errors.email}
					placeholder="your@email.com"
					disabled={isLoading}
				/>

				<Field
					type="password"
					registration={register('password', validationRules.password)}
					showPassword={showPassword}
					onTogglePassword={togglePasswordVisibility}
					error={errors.password?.message}
					hasError={!!errors.password}
					placeholder="Enter your password"
					disabled={isLoading}
				/>

				{!isLogin && (
					<Field
						type="password"
						registration={register('confirmPassword', validationRules.confirmPassword)}
						showPassword={showPassword}
						onTogglePassword={togglePasswordVisibility}
						error={errors.confirmPassword?.message}
						hasError={!!errors.confirmPassword}
						placeholder="Confirm your password"
						disabled={isLoading}
					/>
				)}
			</div>

			<div className="pt-4">
				<AuthButton
					variant="primary"
					type="submit"
					disabled={isLoading}
				>
					{isLoading ? 'Loading...' : 'Continue'}
				</AuthButton>
			</div>

			<AuthToggle isLogin={isLogin} />
			<AuthFooter />
		</form>
	)
}
