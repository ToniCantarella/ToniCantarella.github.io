import { useTranslation } from "react-i18next"
import { Page } from "../common/Page"
import "./Landing.scss"

export const Landing = () => {
    const { t } = useTranslation()

    return (
        <Page>
            <div>
                {t("landing.about-me")}
            </div>
        </Page>
    )
}