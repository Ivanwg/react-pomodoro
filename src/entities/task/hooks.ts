import { useEffect, useState } from 'react'
import { Task, TaskListStore } from './types'
import { getItems } from './browser'
import { useDispatch } from 'react-redux'
import { useTasksSelector } from './store/selector'

export const useGetTasks = (): TaskListStore => {
  const [items, setItems] = useState<Array<Task>>([])
  const dispatch = useDispatch()
  const { items, loading, error } = useTasksSelector((state) => state)

  useEffect(() => {

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
  }, [])

  return {
    items, loading
  }
}
