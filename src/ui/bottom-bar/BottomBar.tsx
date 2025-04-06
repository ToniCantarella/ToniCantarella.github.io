import "./BottomBar.scss"
import { NavigationContext, Pages } from "../navigation/NavigationBar"
import SettingsIcon from "../assets/settings.svg?react"
import { useTranslation } from "react-i18next"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export const BottomBar = () => {
    const navContext = useContext(NavigationContext)
    const navigate = useNavigate()
    const { t } = useTranslation()

    return (
        <div id="bottom-bar">
            {Pages.map(page =>
                <button
                    className={`bottom-bar-item ${navContext.currentPage === page.pathname ? "selected" : ""}`}
                    key={page.pathname}
                    onClick={() => {
                        navigate(page.pathname)
                        navContext.onNavClick(page.pathname)
                    }}
                >
                    {page.icon}
                    {t(`navigation.${page.title}`)}
                </button>
            )}
            <button className="bottom-bar-item">
                <SettingsIcon />
                {t("settings")}
            </button>
        </div>
    )
}