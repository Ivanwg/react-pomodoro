import { TaskStore } from "@/entities/task";
import { applyMiddleware, legacy_createStore as createStore, combineReducers } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import { thunk } from 'redux-thunk'
import { Provider as TaskProvider } from "@/entities/task/store";

// TODO - используем нижележащие сущности task, но параллеьно нужно экспортировать тип глобального стора

// const reducer = combineReducers({
//   task: TaskStore.reducer
// })

// type RootState = ReturnType<typeof reducer>

// const store = createStore(reducer, applyMiddleware(thunk))

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    // <ReduxProvider store={store}>
    //   { children }
    // </ReduxProvider>
    <TaskProvider>
      {children}
    </TaskProvider>
  )
}