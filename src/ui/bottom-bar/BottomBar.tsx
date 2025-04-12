import "./BottomBar.scss"
import { NavigationItems } from "../navigation/NavigationBar"
import SettingsIcon from "../assets/settings.svg?react"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import { LanguagePicker } from "../language-picker/LanguagePicker"
import { ThemePicker } from "../theme-picker/ThemePicker"

export const BottomBar = () => {
    const [settingsOpen, setSettingsOpen] = useState<boolean>(false)
    const { t } = useTranslation()

    return (
        <>
            <nav id="bottom-bar">
                <NavigationItems 
                    icons
                />

                <button
                    className="bottom-bar-item settings"
                    onClick={() => setSettingsOpen(!settingsOpen)}
                    onBlur={() => setSettingsOpen(false)}
                >
                    <SettingsIcon />
                    <span>
                        {t("settings")}
                    </span>
                </button>
            </nav>
            <SettingsDrawer
                open={settingsOpen}
            />
        </>
    )
}

const SettingsDrawer = (props: { open: boolean }) => {
    return (
        <div
            id="settings-drawer"
            className={`${props.open ? "open" : ""}`}
        >
            <div id="content">
                <ThemePicker />
                <LanguagePicker />
            </div>
        </div>
    )
}
