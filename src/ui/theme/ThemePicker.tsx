import {useEffect, useState} from "react";

const themes = ["light", "dark"]

export default function ThemePicker() {
    const [theme, setTheme] = useState<string>("")

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme]);

    return (
        <div>
            {themes.map((theme) => (
                <button
                    key={theme}
                    onClick={() => setTheme(theme)}
                >
                    {theme}
                </button>
            ))}
        </div>
    )
}