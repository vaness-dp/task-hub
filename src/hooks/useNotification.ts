import { useCallback, useEffect, useRef, useState } from 'react'

interface INotificationState {
	isVisible: boolean
	message: string
	taskTitle: string
}

interface Props {
	notification: INotificationState
	showDeleteNotification: (taskTitle: string) => void
	hideNotification: () => void
	isVisible: boolean
}

export function useNotification(): Props {
	const [notification, setNotification] = useState<INotificationState>({
		isVisible: false,
		message: '',
		taskTitle: ''
	})

	const timerRef = useRef<NodeJS.Timeout | null>(null)

	const hideNotification = useCallback(() => {
		setNotification(prev => ({
			...prev,
			isVisible: false
		}))

		if (timerRef.current) {
			clearTimeout(timerRef.current)
			timerRef.current = null
		}
	}, [])

	const showDeleteNotification = useCallback(
		(taskTitle: string) => {
			if (timerRef.current) {
				clearTimeout(timerRef.current)
			}

			setNotification({
				isVisible: true,
				message: 'Task deleted successfully',
				taskTitle
			})

			timerRef.current = setTimeout(() => {
				hideNotification()
			}, 5000)
		},
		[hideNotification]
	)

	// Cleanup when component unmounts
	useEffect(() => {
		return () => {
			if (timerRef.current) {
				clearTimeout(timerRef.current)
			}
		}
	}, [])

	return {
		notification,
		showDeleteNotification,
		hideNotification,
		isVisible: notification.isVisible
	}
}
