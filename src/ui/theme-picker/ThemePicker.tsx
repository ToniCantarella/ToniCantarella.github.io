import { useState, useContext, createContext, ReactElement, useEffect } from "react"

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
    const [theme, setTheme] = useState<string>(() =>
        localStorage.getItem("theme") ?? themes[0]
    )

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

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