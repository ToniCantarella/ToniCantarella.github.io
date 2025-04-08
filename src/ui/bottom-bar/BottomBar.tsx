import "./BottomBar.scss"
import { NavigationContext, Pages } from "../navigation/NavigationBar"
import SettingsIcon from "../assets/settings.svg?react"
import { useTranslation } from "react-i18next"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { div } from "framer-motion/client"
import { LanguagePicker } from "../language-picker/LanguagePicker"
import { ThemePicker } from "../theme-picker/ThemePicker"

export const BottomBar = () => {
    const [settingsOpen, setSettingsOpen] = useState<boolean>(false)
    const navContext = useContext(NavigationContext)
    const { t } = useTranslation()

    return (
        <nav id="bottom-bar">
            <SettingsDrawer
                open={settingsOpen}
            />
            {Pages.map(page =>
                <Link
                    className={`bottom-bar-item ${navContext.currentPage === page.pathname ? "selected" : ""}`}
                    key={page.pathname}
                    onClick={() => { navContext.onNavClick(page.pathname) }}
                    to={page.pathname}
                >
                    {page.icon}
                    <span>
                        {t(`navigation.${page.title}`)}
                    </span>

                </Link>
            )}
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
