export const collapseAnimation = (isCollapsed: boolean) => ({
	animate: { opacity: isCollapsed ? 0 : 1 },
	transition: { duration: 0.1 }
})
