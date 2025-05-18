import { DorficBackground } from "./theme/theme-background/DorficBackground";
import { FrutigerAeroBackground } from "./theme/theme-background/FrutigerAeroBackground";
import { ThemeNames } from "./theme/theme-picker/ThemePicker";

type Background = {
    name: string,
    content: React.ReactNode
}

const Backgrounds: Background[] = [
    {
        name: ThemeNames.DARK,
        content: <></>
    },
    {
        name: ThemeNames.LIGHT,
        content: <></>
    },
    {
        name: ThemeNames.DORFIC,
        content: <DorficBackground/>
    },
    {
        name: ThemeNames.NEUMORPHISM,
        content: <></>
    },
    {
        name: ThemeNames.FRUTIGER_AERO,
        content: <FrutigerAeroBackground />
    },
    {
        name: ThemeNames.RETRO,
        content: <></>
    },
    {
        name: ThemeNames.NATURE,
        content: <></>
    },
]

export const Background = (props: { theme: string }) => {
    const background = Backgrounds.find(background => props.theme === background.name)?.content

    return (
        <div id="app-background">
            {background}
        </div>
    )
}