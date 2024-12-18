import React from 'react'
import { cn } from '@/shared/lib/utils'
import { Container } from '@/shared/ui'

interface HeaderProps {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn('', className)}>
      <Container>
        <div className='py-5 border-b border-b-white/50'>Header</div>
      </Container>
    </header>
  )
}
