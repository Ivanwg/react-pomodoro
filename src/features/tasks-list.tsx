import React from 'react'
import { cn } from '@/shared/lib/utils'
import { Task } from '@/entities/task'
import { useGetTasks } from '@/entities/task/hooks'

interface TasksListProps {
  className?: string
}

export const TasksList: React.FC<TasksListProps> = ({ className }) => {
  const { items, loading } = useGetTasks()
  return (
    // TODO - контроль лоадера в каком компоненте?
    <div className={cn('', className)}>
      {loading ? <Task.ListSkeleton /> : <Task.List items={items} />}
    </div>
  )
}
