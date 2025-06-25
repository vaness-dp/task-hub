import { AuthWrapper } from './AuthWrapper'
import { AuthForm } from './form/AuthForm'

export function Auth({ isLogin }: { isLogin: boolean }) {
	return (
		<AuthWrapper heading={isLogin ? 'Welcome back!' : 'Create an account'}>
			<AuthForm isLogin={isLogin} />
		</AuthWrapper>
	)
}
