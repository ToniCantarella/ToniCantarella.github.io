import "./BottomBar.scss"
import { NavigationItems } from "../NavigationBar"
import SettingsIcon from "../../../assets/settings.svg?react"
import SettingsIconOutlined from "../../../assets/settingsoutlined.svg?react"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import { LanguagePicker } from "../../language-picker/LanguagePicker"
import { ThemePicker } from "../../theme/theme-picker/ThemePicker"
import { HomeButton } from "../home-button/HomeButton"

export const BottomBar = () => {
    const [settingsOpen, setSettingsOpen] = useState<boolean>(false)
    const { t } = useTranslation()

    return (
        <div id="bottom-bar">
            <SettingsDrawer
                open={settingsOpen}
            />
            <nav>
                <NavigationItems
                    icons
                />
                <button
                    className="bottom-bar-item settings"
                    onClick={() => setSettingsOpen(!settingsOpen)}
                    onBlur={() => setSettingsOpen(false)}
                >
                    {settingsOpen
                        ? <SettingsIcon />
                        : <SettingsIconOutlined />
                    }
                    <span>
                        {t("settings")}
                    </span>
                </button>
            </nav>
        </div>
    )
}

const SettingsDrawer = (props: { open: boolean }) => { 
    return (
        <div id="settings-drawer" className={`${props.open ? "open" : ""}`}>
            <div
                id="drawer-content"
            >
                {import.meta.env.MODE === "development" && <HomeButton />}
                <LanguagePicker />
                <ThemePicker />
            </div>
        </div>
    )
}
