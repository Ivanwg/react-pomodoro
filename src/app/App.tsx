import { AppRouter } from '@/app/routes'
import '@/app/styles/index.css'
import { Provider as AppProvider } from './providers'

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}

export default App
