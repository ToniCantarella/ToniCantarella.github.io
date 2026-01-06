import "./BottomBar.scss"
import { NavigationItems } from "../NavigationBar"
import SettingsIcon from "../../../assets/svg/settings.svg?react"
import SettingsIconOutlined from "../../../assets/svg/settingsoutlined.svg?react"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import { LanguagePicker } from "../../language-picker/LanguagePicker"
import { ThemePicker } from "../../theme/theme-picker/ThemePicker"

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
            <div id="drawer-content">
                <LanguagePicker />
                <ThemePicker />
            </div>
        </div>
    )
}
