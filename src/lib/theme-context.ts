import { createContext, useContext } from "react"

export type Theme = "light" | "dark" | "system"

/** Clé partagée avec le script anti-flash de index.html. */
export const THEME_STORAGE_KEY = "atelier-theme"

export type ThemeContextValue = {
  /** Préférence choisie, "system" par défaut. */
  theme: Theme
  /** Thème réellement appliqué, une fois "system" résolu. */
  resolvedTheme: "light" | "dark"
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme doit être utilisé dans un <ThemeProvider>")
  }
  return context
}
