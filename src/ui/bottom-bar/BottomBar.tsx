import "./BottomBar.scss"
import { NavigationContext, Pages } from "../navigation/NavigationBar"
import SettingsIcon from "../assets/settings.svg?react"
import { useTranslation } from "react-i18next"
import { useContext } from "react"
import { Link } from "react-router-dom"

export const BottomBar = () => {
    const navContext = useContext(NavigationContext)
    const { t } = useTranslation()

    return (
        <nav id="bottom-bar">
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
            <button className="bottom-bar-item settings">
                <SettingsIcon />
                <span>
                    {t("settings")}
                </span>
            </button>
        </nav>
    )
}
