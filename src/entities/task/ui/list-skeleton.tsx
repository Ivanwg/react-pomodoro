import React from 'react'
import { cn } from '@/shared/lib/utils'
import { Skeleton } from '@/shared/ui'

interface ListSkeletonProps {
  className?: string
  count?: number
}

export const ListSkeleton: React.FC<ListSkeletonProps> = ({
  className,
  count = 5,
}) => {
  return (
    <ul className={cn('flex flex-col divide-y divide-y-white/10', className)}>
      {Array.from({ length: count }).map((_, index) => (
        <li key={index}>
          <div className='py-3 flex items-center gap-3'>
            <Skeleton className='w-5 h-5 shrink-0 rounded-full bg-white/30' />
            <Skeleton className='w-full h-4 rounded-1 bg-white/30' />
            <Skeleton className='h-5 w-2 rounded-1 bg-white/30' />
          </div>
        </li>
      ))}
    </ul>
  )
}
