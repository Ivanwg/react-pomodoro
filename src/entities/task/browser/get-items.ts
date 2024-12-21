import { useLocalStorage } from 'react-use'
import { Task } from '../types'

// TODO - позже будет api запрос

export const getItems = (): Array<Task> => {
  // const [value] = useLocalStorage('pomodoro-tasks', [])
  const value = localStorage.getItem('pomodoro-tasks')
  return value ? JSON.parse(value) : []
}
