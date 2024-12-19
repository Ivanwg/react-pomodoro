import React from 'react'
import { cn } from '@/shared/lib/utils'
import { Button, Input } from '@/shared/ui'

interface AddTaskFormProps {
  className?: string
}

export const AddTaskForm: React.FC<AddTaskFormProps> = ({ className }) => {
  return (
    <form className={cn('flex gap-3', className)}>
      <Input placeholder=' Название задачи' />
      <Button>
        Добавить
      </Button>
    </form>
  )
}
