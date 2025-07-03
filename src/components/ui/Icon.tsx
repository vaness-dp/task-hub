import { getIconStyles } from '@/utils/styles'

import type { ComponentSize, IconComponent, WithClassName } from '@/types/common'

interface Props extends WithClassName {
	icon: IconComponent
	size?: ComponentSize
}

export function Icon({ icon: IconComponent, size = 'md', className }: Props) {
	return <IconComponent className={getIconStyles(size, className)} />
}
