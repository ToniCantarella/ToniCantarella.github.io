import { useState, useContext, createContext, ReactElement, useEffect } from "react"
import "./ThemePicker.scss"
import { DarkButton } from "./button-content/DarkButton"
import { LightButton } from "./button-content/LightButton"
import { SkeuomorphismButton } from "./button-content/SkeuomorphismButton"
import { FrutigerAeroButton } from "./button-content/FrutigerAeroButton"
import { RetroButton } from "./button-content/RetroButton"
import { NatureButton } from "./button-content/NatureButton"

type Theme = {
    name: string,
    content: ReactElement
}

export const themes: Theme[] = [
    {
        name: "dark-theme",
        content: <DarkButton/>
    },
    {
        name: "light-theme",
        content: <LightButton/>
    },
    {
        name: "skeuomorphism",
        content: <SkeuomorphismButton/>
    },
    {
        name: "frutiger-aero",
        content: <FrutigerAeroButton/>
    },
    {
        name: "retro",
        content: <RetroButton/>
    },
    {
        name: "nature",
        content: <NatureButton/>
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