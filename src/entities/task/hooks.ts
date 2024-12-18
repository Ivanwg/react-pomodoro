import { useEffect, useState } from 'react'
import { Task, TaskListStore } from './types'
import { getItems } from './api'

export const useGetTasks = (): TaskListStore => {
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState<Array<Task>>([])

  useEffect(() => {
    if (!loading) {
      setLoading(true)
      // Проверка сервиса
      if (true) {
        console.log(getItems)
        getItems()
          .then((items) => {
            setItems(items)
          })
          .catch((err) => {})
          .finally(() => {
            setLoading(false)
          })
      } else {
      }
    }
  }, [])

  return {
    loading,
    items,
  }
}
