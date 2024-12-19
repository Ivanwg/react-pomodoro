import { TaskListStore } from "../types"


enum ActionTypes {
  FETCH_LIST = 'FETCH_LIST',
  CLEAR = 'CLEAR'

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
    case ActionTypes.FETCH_LIST: {
      return {
        ...state,
        loading: true
      }
    } 
    case ActionTypes.CLEAR: {
      return {
        ...state,
        error: null,
        loading: false,
        items: []
      }
    }
     default: {
      return state
    }
  }
}