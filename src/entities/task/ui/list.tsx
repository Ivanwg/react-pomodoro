import React from 'react'
import { cn } from '@/shared/lib/utils'
import { Card } from './card'
import { Task } from '../types'

interface ListProps {
  className?: string
  items: Array<Task>
}

export const List: React.FC<ListProps> = ({ className, items }) => {
  return (
    <ul className={cn('flex flex-col divide-y divide-y-white/10', className)}>
      {items.map((item) => (
        <li key={item.id}>
          <Card item={item} />
        </li>
      ))}
    </ul>
  )
}
