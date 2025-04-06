import { useTranslation } from "react-i18next"
import { Page } from "../common/Page"
import landingImage from "../assets/landing.jpg"
import "./Landing.scss"

export const Landing = () => {
    const { t } = useTranslation()

    return (
        <Page>
            <div id="landing">

                <div id="about-me">
                    <h2>
                        {t("landing.title")}
                    </h2>
                    <p>
                        {t("landing.about-me-intro")}
                    </p>
                </div>

                <img src={landingImage} alt="about-me"/>
            </div>
        </Page>
    )
}