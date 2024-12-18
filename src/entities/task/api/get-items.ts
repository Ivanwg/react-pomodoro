import { Task } from '../types'

// TODO - позже будет api запрос

export const getItems = async (): Promise<Array<Task>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'Задача 1',
          coins: 1,
          completed: false,
        },
        {
          id: 2,
          name: 'Задача 2',
          coins: 2,
          completed: false,
        },
      ])
    }, 200)
  })
}
