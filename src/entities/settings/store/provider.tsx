import { Provider as ReduxProvider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
import { reducer } from "./reducer"
import { thunk } from "redux-thunk"
import React from "react"

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {

  const store = createStore(reducer, applyMiddleware(thunk))



  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  )
}