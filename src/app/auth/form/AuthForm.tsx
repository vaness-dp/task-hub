'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { AuthFooter } from '@/app/auth/form/auth-footer/AuthFooter'

import { Field } from '@/components/ui/form-elements/Field'

import { AuthButton } from '@/ui/AuthButton'

import { AuthToggle } from './AuthToggle'
import type { IAuthForm } from './auth-form.types'

export function AuthForm({ isLogin }: { isLogin: boolean }) {
	const [showPassword, setShowPassword] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset
	} = useForm<IAuthForm>({
		mode: 'onChange'
	})

	return (
		<form
			onSubmit={handleSubmit(data => console.log(data))}
			className="space-y-4"
		>
			<div className="space-y-4">
				<Field
					type="email"
					registration={register('email', { required: 'Email is required!' })}
					error={errors.email?.message}
					hasError={!!errors.email}
					placeholder="your@email.com"
				/>
				<Field
					type="password"
					registration={register('password', { required: 'Password is required!' })}
					showPassword={showPassword}
					onTogglePassword={() => setShowPassword(!showPassword)}
					error={errors.password?.message}
					hasError={!!errors.password}
					placeholder="Enter your password"
				/>
				{!isLogin && (
					<Field
						type="password"
						registration={register('confirmPassword', {
							required: 'Confirm password is required!',
							validate: value => value === watch('password') || 'Password`s don`t match!'
						})}
						showPassword={showPassword}
						onTogglePassword={() => setShowPassword(!showPassword)}
						error={errors.confirmPassword?.message}
						hasError={!!errors.confirmPassword}
						placeholder="Confirm your password"
					/>
				)}
			</div>

			<div className="pt-4">
				<AuthButton
					variant="primary"
					type="submit"
				>
					Continue
				</AuthButton>
			</div>

			<AuthToggle isLogin={isLogin} />
			<AuthFooter />
		</form>
	)
}
