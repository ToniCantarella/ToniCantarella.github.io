import { useTranslation } from "react-i18next"
import { Page } from "../common/Page"
import "./Landing.scss"
import { Card } from "../common/Card"

export const Landing = () => {
    const { t } = useTranslation()

    return (
        <Page>
            <div id="landing">
                <Card>
                    {t("landing.about-me")}
                </Card>
                <Card />
            </div>
        </Page>
    )
}