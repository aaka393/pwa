// import { create } from "zustand";
// import { createJSONStorage, devtools, persist } from "zustand/middleware";

// type Theme = "light" | "dark";

// interface ThemeStore {
//   theme: Theme;
//   setTheme: (theme: Theme) => void;
// }

// const useThemeStore = create<ThemeStore>()(
//   devtools(
//     persist(
//       (set) => ({
//         theme: "dark",
//         setTheme: (theme) => set({ theme }),
//       }),
//       { name: "theme-store", storage: createJSONStorage(() => localStorage) }
//     ),
//     { name: "theme-store", enabled: process.env.NODE_ENV === "development" }
//   )
// );

// export const isDarkMode = (state: ThemeStore) => state.theme === "dark";

// export default useThemeStore;


import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const useThemeStore = create<ThemeStore>()(
  devtools(
    persist(
      (set) => ({
        theme: "dark", // Default theme
        setTheme: (theme) => set({ theme }),
      }),
      { name: "theme-store", storage: createJSONStorage(() => localStorage) }
    ),
    { name: "theme-store", enabled: process.env.NODE_ENV === "development" }
  )
);

export const isDarkMode = (state: ThemeStore) => state.theme === "dark";

export default useThemeStore;
