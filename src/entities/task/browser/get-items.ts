import { useLocalStorage } from 'react-use'
import { Task } from '../types'

// TODO - позже будет api запрос

export const getItems = (): Array<Task> => {
  const [value] = useLocalStorage('pomodoro-tasks', [])
  return value
}
