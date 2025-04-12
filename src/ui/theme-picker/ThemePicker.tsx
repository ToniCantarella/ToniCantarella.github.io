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

export enum ThemeNames {
    DARK = "dark-theme",
    LIGHT = "light-theme",
    SKEUOMORPHISM = "skeuomorphism",
    FRUTIGER_AERO = "frutiger-aero",
    RETRO = "retro",
    NATURE = "nature"
}

export const themes: Theme[] = [
    {
        name: ThemeNames.DARK,
        content: <DarkButton/>
    },
    {
        name: ThemeNames.LIGHT,
        content: <LightButton/>
    },
    {
        name: ThemeNames.SKEUOMORPHISM,
        content: <SkeuomorphismButton/>
    },
    {
        name: ThemeNames.FRUTIGER_AERO,
        content: <FrutigerAeroButton/>
    },
    {
        name: ThemeNames.RETRO,
        content: <RetroButton/>
    },
    {
        name: ThemeNames.NATURE,
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