import { setTasks } from "../store/reducer"

export const fetchItems = () => {
  return dispatch => {
    try {
      new Promise((resolve, reject) => {
        resolve([])
      }).then(res => dispatch(setTasks(res)))  
    } catch (err) {
      // dispatch(setTasks(res))
    }
  }
}