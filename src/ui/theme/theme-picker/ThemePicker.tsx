import { useState, useContext, createContext, ReactElement, useEffect } from "react"
import "./ThemePicker.scss"
import DarkThemeIcon from "../../../assets/dark-theme.svg?react"
import LightThemeIcon from "../../../assets/light-theme.svg?react"
import { AppContext } from "../../../App"

type Theme = {
    name: string,
    content: ReactElement
}

export enum ThemeNames {
    DARK = "dark-theme",
    LIGHT = "light-theme"
}

export const themes: Theme[] = [
    {
        name: ThemeNames.DARK,
        content: <DarkThemeIcon />
    },
    {
        name: ThemeNames.LIGHT,
        content: <LightThemeIcon />
    }
]

export const ThemePicker = () => {
    const themeContext = useContext(ThemeContext)
    const appContext = useContext(AppContext)

    return (
        <div
            id="theme-picker"
            className={`${appContext.introPlaying ? "hide" : ""}`}
        >
            {themes.map((theme, index) => (
                <button
                    key={theme.name}
                    onClick={() => themeContext.setTheme(theme.name)}
                    className={`theme-button ${theme.name} ${themeContext.theme === theme.name ? "selected" : ""}`}
                    style={{
                        animation: `${appContext.introPlaying ? "" : `themeButton 1s ease .${index}s forwards`}`,
                    }}
                >
                    {theme.content}
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
        localStorage.getItem("theme") ?? themes[0].name
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