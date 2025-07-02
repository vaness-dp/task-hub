import { LogOut } from 'lucide-react'

import { useLogout } from '@/hooks/auth/useLogout'

export function LogoutButton() {
	const logoutMutation = useLogout()

	const handleLogout = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		logoutMutation.mutate()
	}
	return (
		<button
			onClick={handleLogout}
			disabled={logoutMutation.isPending}
			className="absolute top-2 right-2 z-20 p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-50"
			title="Logout"
		>
			<LogOut className="w-4 h-4" />
		</button>
	)
}
