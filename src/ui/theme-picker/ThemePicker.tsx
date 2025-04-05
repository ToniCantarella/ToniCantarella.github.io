import { useState, useContext, createContext, ReactElement, useEffect } from "react"
import "./ThemePicker.scss"
import { DarkTheme } from "./button-content/DarkTheme"
import { LightTheme } from "./button-content/LightTheme"
import { SkeuomorphismTheme } from "./button-content/SkeuomorphismTheme"
import { NatureTheme } from "./button-content/NatureTheme"
import { FrutigerAeroTheme } from "./button-content/FrutigerAero"
import { RetroTheme } from "./button-content/RetroTheme"

type Theme = {
    name: string,
    content: ReactElement
}

const themes: Theme[] = [
    {
        name: "dark-theme",
        content: <DarkTheme/>
    },
    {
        name: "light-theme",
        content: <LightTheme/>
    },
    {
        name: "skeuomorphism",
        content: <SkeuomorphismTheme/>
    },
    {
        name: "frutiger-aero",
        content: <FrutigerAeroTheme/>
    },
    {
        name: "retro",
        content: <RetroTheme/>
    },
    {
        name: "nature",
        content: <NatureTheme/>
    }
]

export const ThemePicker = () => {
    const themeContext = useContext(ThemeContext)

    return (
        <div id="theme-picker">
            {themes.map(theme => (
                <button
                    key={theme.name}
                    onClick={() => themeContext.setTheme(theme.name)}
                    className={`theme-button ${theme.name} ${themeContext.theme === theme.name ? "selected" : ""}`}
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