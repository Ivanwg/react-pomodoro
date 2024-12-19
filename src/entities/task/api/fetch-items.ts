import { setTasks } from "../store/reducer"

export const fetchItems = () => {
  return dispatch => {
    new Promise((resolve, reject) => {
      resolve([])
    }).then(res => dispatch(setTasks(res)))
  }
}