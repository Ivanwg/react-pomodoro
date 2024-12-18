import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainPage, StatisticPage } from '@/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/statistic',
    element: <StatisticPage />,
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
