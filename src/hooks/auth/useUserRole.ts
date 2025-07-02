import { useAuthState } from './useAuthState'

export function useUserRole() {
	const { user } = useAuthState()

	const hasRole = (role: string) => user?.role === role
	const hasAnyRole = (roles: string[]) => roles.includes(user?.role || '')

	return {
		role: user?.role,
		hasRole,
		hasAnyRole,
		isAdmin: hasRole('admin'),
		isUser: hasRole('user')
	}
}
