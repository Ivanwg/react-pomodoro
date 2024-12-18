export interface Task {
  id: string | number
  name: string
  coins: number //pomodoros
  completed: boolean
}

export interface TaskListStore {
  items: Array<Task>
  loading: boolean
}
