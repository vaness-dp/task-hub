import type { User } from '@supabase/supabase-js'

import type { IUser } from '@/types/profile.types'

export const mapSupabaseUserToIUser = (user: User): IUser => {
	return {
		id: user.id,
		name: user.user_metadata?.name || user.email?.split('@')[0],
		email: user.email || '',
		role: user.user_metadata?.role || 'user',
		avatar: user.user_metadata?.avatar_url || null
	}
}

export const createUserMetadata = (email: string) => {
	return {
		full_name: email.split('@')[0],
		role: 'user'
	}
}
