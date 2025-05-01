import { useState, useContext, createContext, ReactElement, useEffect } from "react"
import "./ThemePicker.scss"
import { DarkButton } from "./button-content/DarkButton"
import { LightButton } from "./button-content/LightButton"
import { NeumorphismButton } from "./button-content/Neumorphism"
import { FrutigerAeroButton } from "./button-content/FrutigerAeroButton"
import { RetroButton } from "./button-content/RetroButton"
import { NatureButton } from "./button-content/NatureButton"
import { AppContext } from "../../../App"

type Theme = {
    name: string,
    content: ReactElement,
    devOnly?: boolean
}

export enum ThemeNames {
    DARK = "dark-theme",
    LIGHT = "light-theme",
    NEUMORPHISM = "neumorphism",
    FRUTIGER_AERO = "frutiger-aero",
    RETRO = "retro",
    NATURE = "nature"
}

const onlyDevModeThemes: Theme[] = [
    {
        name: ThemeNames.NEUMORPHISM,
        content: <NeumorphismButton />,
        devOnly: true
    },
    {
        name: ThemeNames.FRUTIGER_AERO,
        content: <FrutigerAeroButton />,
        devOnly: true
    },
    {
        name: ThemeNames.RETRO,
        content: <RetroButton />,
        devOnly: true
    },
    {
        name: ThemeNames.NATURE,
        content: <NatureButton />,
        devOnly: true
    }
]

export const themes: Theme[] = [
    {
        name: ThemeNames.DARK,
        content: <DarkButton />
    },
    {
        name: ThemeNames.LIGHT,
        content: <LightButton />
    },
    ...(import.meta.env.MODE === "development" ? onlyDevModeThemes : [])
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