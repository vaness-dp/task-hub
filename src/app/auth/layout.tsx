import { AuthBackground } from '@/app/auth/initial/AuthBackground'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
			<AuthBackground />
			<div className="w-full max-w-sm relative z-10">{children}</div>
		</div>
	)
}
