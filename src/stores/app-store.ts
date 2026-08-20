import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type Theme = 'light' | 'dark'

type AppState = {
  theme: Theme
  sidebarOpen: boolean
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
  toggleSidebar: () => void
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        theme: 'dark',
        sidebarOpen: true,
        toggleTheme: () =>
          set(
            (s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' }),
            undefined,
            'app/toggleTheme',
          ),
        setTheme: (theme) => set({ theme }, undefined, 'app/setTheme'),
        toggleSidebar: () =>
          set((s) => ({ sidebarOpen: !s.sidebarOpen }), undefined, 'app/toggleSidebar'),
      }),
      { name: 'exodia-app' },
    ),
    { name: 'AppStore', enabled: import.meta.env.DEV },
  ),
)
