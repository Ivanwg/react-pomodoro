import { TypedUseSelectorHook, useSelector } from "react-redux"
import { reducer } from "./reducer"

// export const useSettingsSelector = () => {
//   const items = useSelector((state) => state.task.items)
//   return items
// }

// export const useSettingsSelector = useSelector<ReturnType<typeof reducer>>
export const useSettingsSelector: TypedUseSelectorHook<ReturnType<typeof reducer>> = useSelector