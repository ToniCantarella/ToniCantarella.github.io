import { useTranslation } from "react-i18next"
import { Page } from "../common/Page"
import landingImage from "../assets/landing.jpg"
import "./AboutMe.scss"

export const AboutMe = () => {
    const { t } = useTranslation()

    return (
        <Page>
            <div id="about-me">

                <div id="article">
                    <h2>
                        {t("about-me.title")}
                    </h2>
                    <p>
                        {t("about-me.about-me-intro")}
                    </p>
                </div>

                <img src={landingImage} alt="about-me"/>
            </div>
        </Page>
    )
}