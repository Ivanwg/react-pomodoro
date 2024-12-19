import React, { useState } from 'react'
import { cn } from '@/shared/lib/utils'
import { Task } from '../types'
import { CircleMinus, CirclePlus, EllipsisVertical, PencilLine, Trash2 } from 'lucide-react'
import { Dropdown } from '@/shared/ui'

// TODO - разбитие item на составные props ?
interface CardProps {
  className?: string
  item: Task
}

export const Card: React.FC<CardProps> = ({ className, item }) => {
  const [readonly, setReadonly] = useState(true)

  return (
    <div className={cn('flex items-center gap-3 py-3', className)}>
      <span className='w-5 h-5 border border-white/40 rounded-full inline-flex items-center justify-center shrink-0'>
        {item.coins}
      </span>
      <input
        type='text'
        readOnly={readonly}
        value={item.name}
        className='flex-grow bg-transparent p-0'
      />
      <Dropdown.DropdownMenu>
        <Dropdown.DropdownMenuTrigger className='p-2'>
          <EllipsisVertical size={20} className='text-current' />
        </Dropdown.DropdownMenuTrigger>
        <Dropdown.DropdownMenuContent className='px-0'>
          <Dropdown.DropdownMenuItem className='flex items-center gap-2 px-4 py-2'>
            <CirclePlus size={16} className='text-current' />
            Увеличить
          </Dropdown.DropdownMenuItem>
          <Dropdown.DropdownMenuItem className='flex items-center gap-2 px-4 py-2'>
            <CircleMinus size={16} className='text-current' />
            Уменьшить
          </Dropdown.DropdownMenuItem>
          <Dropdown.DropdownMenuItem className='flex items-center gap-2 px-4 py-2'>
            <PencilLine size={16} className='text-current' />
            Редактировать
          </Dropdown.DropdownMenuItem>
          <Dropdown.DropdownMenuItem className='flex items-center gap-2 px-4 py-2'>
            <Trash2 size={16} className='text-current' />
            Удалить
          </Dropdown.DropdownMenuItem>
        </Dropdown.DropdownMenuContent>
      </Dropdown.DropdownMenu>
    </div>
  )
}
