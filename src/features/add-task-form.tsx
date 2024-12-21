import React, { useState } from 'react'
import { cn } from '@/shared/lib/utils'
import { Button, Input } from '@/shared/ui'
import { useTasksSelector } from '@/entities/task/store/selector'

interface AddTaskFormProps {
  className?: string
}

export const AddTaskForm: React.FC<AddTaskFormProps> = ({ className }) => {
  const [value, setValue] = useState('')
  const { loading } = useTasksSelector((state) => state)

  const onAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // AddTask(value)  В этом модуле предусмотреть дефолтные пропсы
  }
  return (
    <form className={cn('flex gap-3', className)} onSubmit={onAddTask}>
      <Input placeholder='Название задачи' value={value} onChange={(e) => setValue(e.target.value)} />
      <Button loading={loading}>
        Добавить
      </Button>
    </form>
  )
}
