import { Header } from '@/widgets'

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='py-6'>{children}</main>
    </>
  )
}
