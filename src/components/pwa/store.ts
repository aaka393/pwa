import { create } from 'zustand'
import { persist, devtools, createJSONStorage } from 'zustand/middleware'

interface AppState {
  count: number;
  isOnline: boolean;
  increase: () => void;
  reset: () => void;

}

const useStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        isOnline: navigator.onLine, 
        increase: () => set((state) => ({ count: state.count + 1 })),
        reset: () => set({ count: 0 }),
      }),
      {
        name: 'app-storage',
        storage: createJSONStorage(() => localStorage),
      }
    ),
    { name: 'AppStore' }
  )
);

export default useStore;
