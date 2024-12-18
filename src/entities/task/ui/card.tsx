import React, { useState } from 'react'
import { cn } from '@/shared/lib/utils'
import { Task } from '../types'
import { EllipsisVertical } from 'lucide-react'

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
      <button className='py-2'>
        <EllipsisVertical size={20} className='text-current' />
      </button>
    </div>
  )
}
