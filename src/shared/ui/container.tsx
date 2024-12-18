import React from 'react'
import { cn } from '@/shared/lib/utils'

interface ContainerProps {
  className?: string
}

export const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  className,
  children,
}) => {
  return <div className={cn('container-fluid', className)}>{children}</div>
}
