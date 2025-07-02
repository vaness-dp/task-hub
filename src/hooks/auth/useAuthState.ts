import { useUser } from './useUser'

export function useAuthState() {
	const { data: user, isLoading, error } = useUser()

	return {
		user,
		isLoading,
		isAuth: !!user && !error,
		isError: !!error
	}
}
