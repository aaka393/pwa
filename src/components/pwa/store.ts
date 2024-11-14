import { create } from 'zustand'
import { persist, devtools, createJSONStorage } from 'zustand/middleware'

interface CounterState {
  count: number
  increase: () => void
  reset: () => void
}

const useStore = create<CounterState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increase: () => set((state) => ({ count: state.count + 1 })),
        reset: () => set({ count: 0 }),
      }),
      {
        name: 'counter-storage', 
        storage: createJSONStorage(() => localStorage), 

      }
    ),
    { name: 'CounterStore' } 
  )
)

export default useStore
