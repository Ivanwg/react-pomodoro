import { TypedUseSelectorHook, useSelector } from "react-redux"
import { reducer } from "./reducer"

// export const useTasksSelector = () => {
//   const items = useSelector((state) => state.task.items)
//   return items
// }

// export const useTasksSelector = useSelector<ReturnType<typeof reducer>>
export const useTasksSelector: TypedUseSelectorHook<ReturnType<typeof reducer>> = useSelector