import React from 'react'
import { cn } from '@/shared/lib/utils'
import { Task } from '@/entities/task'
import { useGetTasks } from '@/entities/task/hooks'
import { useTasksSelector } from '@/entities/task/store/selector'

interface TasksListProps {
  className?: string
}

export const TasksList: React.FC<TasksListProps> = ({ className }) => {
  // const { items, loading } = useGetTasks()
  const { items, loading, error } = useTasksSelector((state) => state)
  return (
    // TODO - контроль лоадера в каком компоненте?
    // TODO - контроль ошибки в каком компоненте ?
    <div className={cn('', className)}>
      {loading ? <Task.ListSkeleton /> : <Task.List items={items} />}
    </div>
  )
}
