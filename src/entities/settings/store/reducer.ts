import { useDispatch } from "react-redux"


enum ActionTypes {

  
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

export const reducer = (state: any = initialState, action: Action): any => {
  switch (action.type) {

    default: {
      return state
    }
  }
}

// Actions Creators
