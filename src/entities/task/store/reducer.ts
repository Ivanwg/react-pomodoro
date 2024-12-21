import { useDispatch } from "react-redux"
import { Task, TaskListStore } from "../types"


enum ActionTypes {
  LOADING = 'loading',
  UNLOADING = 'unloading',
  CLEAR = 'CLEAR_LIST',
  SET = 'SET_LIST',
  ERROR = 'ERROR',
}

const initialState = {
  items: [],
  loading: false,
  error: null
}

interface Action {
  type: ActionTypes,
  payload?: any
}

export const reducer = (state: TaskListStore = initialState, action: Action): TaskListStore => {
  switch (action.type) {
    case ActionTypes.LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case ActionTypes.UNLOADING: {
      return {
        ...state,
        loading: false
      }
    }
    case ActionTypes.ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }

    case ActionTypes.SET: {
      return {
        ...state,
        items: action.payload
      }
    }
    case ActionTypes.CLEAR: {
      return {
        ...state,
        items: []
      }
    }
    default: {
      return state
    }
  }
}

// Actions Creators

export const setLoading = () => ({
  type: ActionTypes.LOADING,
})

export const unload = () => ({
  type: ActionTypes.UNLOADING,
})

export const setTasks = (payload: Array<Task>) => ({
  type: ActionTypes.SET,
  payload
})

export const setError = (payload: string) => ({
  type: ActionTypes.ERROR,
  payload
})


// Методы хранилища

export const useFetchItems = () => {
  const dispatch = useDispatch()

  dispatch(setLoading())
  new Promise((resolve) => {
    resolve([])
  }).then(res => {
    dispatch(setTasks(res))
  }).catch(err => {
    console.error(err)
    dispatch(setError(err))
  }).finally(() => {
    dispatch(unload())
  })


}