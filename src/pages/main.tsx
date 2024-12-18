import { TasksList as TasksListFeature } from '@/features'
import { MainLayout } from '@/shared/layouts'
import { Container } from '@/shared/ui'
import React from 'react'

export const MainPage = () => {
  return (
    <MainLayout>
      <Container>
        <div className='grid lg:grid-cols-2 gap-y-6 gap-x-[80px]'>
          <div className='rounded-2xl bg-white/20 p-4'>
            Здесь текст описания
          </div>
          <div className='lg:col-start-2 lg:row-start-1 lg:row-end-3 rounded-2xl bg-white/20 p-4'>
            Timer ticker
          </div>
          <TasksListFeature />
        </div>
      </Container>
    </MainLayout>
  )
}
