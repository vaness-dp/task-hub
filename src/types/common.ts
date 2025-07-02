import type { ReactNode } from 'react'

export type WithClassName<T = {}> = T & { className?: string }
export type WithChildren<T = {}> = T & { children: ReactNode }
export type BaseProps<T = {}> = WithClassName<WithChildren<T>>

export type ComponentVariant = 'primary' | 'secondary' | 'ghost'
export type ComponentSize = 'sm' | 'md' | 'lg' | 'xl'

export type IconComponent = React.ComponentType<{ className?: string }>
