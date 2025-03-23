import { useTranslation } from "react-i18next"
import { Page } from "../common/Page"
import { Pathnames } from "../navigation/NavigationBar"
import "./Landing.scss"

export const Landing = () => {
    const { t } = useTranslation()

    return (
        <Page
            key={Pathnames.LANDING}
        >
            <div>
                {t("landing.about-me")}
            </div>
        </Page>
    )
}