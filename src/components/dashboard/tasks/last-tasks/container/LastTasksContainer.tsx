import { DeleteNotification } from '@/components/ui/notifications/DeleteNotification'

import { useLastTasksLogic } from '@/hooks/last-tasks/useLastTasksLogic'

import type { ITask } from '@/types/task.types'

import { TaskEditModal } from '../modals/task-edit-modal/TaskEditModal'
import { LastTasksSlider } from '../slider/tasks-slider/LastTasksSlider'

import { LastTasksControls } from './LastTasksControls'
import { LastTasksHeader } from './LastTasksHeader'

interface Props {
	tasks: ITask[]
	onTaskCreated?: (task: ITask) => void
	onTaskDeleted?: (taskId: string) => void
}

export function LastTasksContainer({ tasks, onTaskCreated, onTaskDeleted }: Props) {
	const {
		tasksList,
		deletedTask,
		activeFilter,
		sortedTasks,
		taskManager,
		notification,
		hideNotification,
		currentIndex,
		totalPages,
		canSlideLeft,
		canSlideRight,
		direction,
		handleFilterChange,
		handleSortToggle,
		handleCreateTask,
		handleTaskDeleted,
		handleUndoDelete,
		handleSlide
	} = useLastTasksLogic({ tasks, onTaskCreated, onTaskDeleted })

	const handleTaskDuplicated = (task: ITask) => {
		taskManager.openDuplicateModal(task)
	}

	const handleTaskEdit = (task: ITask) => {
		taskManager.openEditModal(task)
	}

	return (
		<>
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<LastTasksHeader
						tasksCount={sortedTasks.length}
						onCreateTask={handleCreateTask}
					/>

					<LastTasksControls
						totalPages={totalPages}
						canSlideLeft={canSlideLeft}
						canSlideRight={canSlideRight}
						onSlide={handleSlide}
						tasks={tasksList}
						activeFilter={activeFilter}
						onFilterChange={handleFilterChange}
						direction={direction}
						onSortToggle={handleSortToggle}
					/>
				</div>

				<LastTasksSlider
					tasks={sortedTasks}
					currentIndex={currentIndex}
					activeFilter={activeFilter}
					onCreateTask={handleCreateTask}
					onTaskDeleted={handleTaskDeleted}
					onTaskDuplicated={handleTaskDuplicated}
					onTaskEdit={handleTaskEdit}
				/>
			</div>

			<TaskEditModal
				isOpen={taskManager.isModalOpen}
				task={taskManager.currentTask}
				mode={taskManager.modalMode}
				onClose={taskManager.closeModal}
				onSave={taskManager.saveTask}
			/>

			<DeleteNotification
				isVisible={notification.isVisible}
				taskTitle={notification.taskTitle}
				onUndo={deletedTask ? handleUndoDelete : undefined}
				onClose={hideNotification}
			/>
		</>
	)
}
