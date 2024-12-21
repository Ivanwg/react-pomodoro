export interface Task {
  id: string,
  name: string,
  coins: number, //pomodoros
  completed: boolean,
}

export interface TaskListStore {
  items: Array<Task>,
  loading: boolean,
  error: string | null,
}
