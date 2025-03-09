import { useState, useContext, createContext, ReactElement } from "react"

const themes: string[] = [
    "light-theme",
    "dark-theme"
]

export const ThemePicker = () => {
    const themeContext = useContext(ThemeContext)

    return (
        <div>
            {themes.map(theme => (
                <button key={theme} onClick={() => {
                    themeContext.setTheme(theme)
                }}>
                    {theme}
                </button>
            ))}
        </div>
    )
}

type ThemeContextType = {
    theme: string,
    setTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

type ThemeProviderProps = {
    children: ReactElement
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const [theme, setTheme] = useState<string>(themes[0])

    const themeContext = {
        theme,
        setTheme
    }

    return (
        <ThemeContext.Provider value={themeContext}>
            {props.children}
        </ThemeContext.Provider>
    )
}