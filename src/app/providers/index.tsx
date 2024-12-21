import { TaskStore } from "@/entities/task";
import { SettingsStore } from "@/entities/settings";
import { applyMiddleware, legacy_createStore as createStore, combineReducers } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import { thunk } from 'redux-thunk'
import { Provider as TaskProvider } from "@/entities/task/store";
import { Provider as SettingsProvider } from "@/entities/settings/store";

// TODO - используем нижележащие сущности task, но параллеьно нужно экспортировать тип глобального стора

// const reducer = combineReducers({
//   task: TaskStore.reducer,
//   settings: SettingsStore.reducer
// })

// type RootState = ReturnType<typeof reducer>

// const store = createStore(reducer, applyMiddleware(thunk))

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    // <ReduxProvider store={store}>
    //   { children }
    // </ReduxProvider>
    <SettingsProvider>
      <TaskProvider>
        {children}
      </TaskProvider>
    </SettingsProvider>
  )
}