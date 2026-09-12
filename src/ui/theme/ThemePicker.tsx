import {useEffect, useState} from "react";
import {MdLightMode, MdNightlightRound} from "react-icons/md";

enum Theme {
    Dark = "dark",
    Light = "light"
}

export default function ThemePicker() {
    const fetchedTheme = localStorage.getItem("theme") as Theme;
    const [theme, setTheme] = useState<Theme>(fetchedTheme ? fetchedTheme : Theme.Dark);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme]);

    return (
        <div className="flex gap-4">
            <ThemeButton
                onClick={() => setTheme(Theme.Light)}
                icon={<MdLightMode/>}
            />
            <ThemeButton
                onClick={() => setTheme(Theme.Dark)}
                icon={<MdNightlightRound/>}
            />
        </div>
    )
}

type ThemeButtonProps = {
    icon: React.ReactNode
    onClick?: () => void
}

function ThemeButton(props: ThemeButtonProps) {
    return (
        <button
            onClick={props.onClick}
        >
            {props.icon}
        </button>
    )
}