import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

interface AppState {
  count: number;
  isOnline: boolean;
  showPrompt: boolean;
  increase: () => void;
  reset: () => void;
  setIsOnline: (status: boolean) => void;
  setShowPrompt: (status: boolean) => void;
}

const useStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        isOnline: navigator.onLine,
        showPrompt: true,
        increase: () => set((state) => ({ count: state.count + 1 })),
        reset: () => set({ count: 0 }),
        setIsOnline: (status: boolean) => set({ isOnline: status }),
        setShowPrompt: (status: boolean) => set({ showPrompt: status }),
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
