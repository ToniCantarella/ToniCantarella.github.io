import { useTranslation } from "react-i18next"
import { Page } from "../common/Page"
import landingImage from "../../assets/landing.jpg"
import "./AboutMe.scss"
import { Link } from "react-router-dom"
import { NavigationContext, Paths } from "../navigation/NavigationBar"
import { useContext } from "react"

export const AboutMe = () => {
    const navContext = useContext(NavigationContext)
    const { t } = useTranslation()
    const year = new Date().getFullYear() - new Date("2022-05-30").getFullYear()

    return (
        <Page>
            <div id="about-me">
                <div id="article">
                    <h1>
                        {t("about-me.title")}
                    </h1>
                    <p>
                        {t("about-me.intro", { year: year })}

                    </p>
                    <p>
                        {t("about-me.middle")}
                    </p>
                    <p>
                        {t("about-me.outro")}
                        <Link
                            onClick={() => navContext.onNavClick(Paths.SKILLS)}
                            to={Paths.SKILLS}
                        >
                            {`${t("about-me.to-skills")}`}
                        </Link>
                        {t("about-me.can-offer")}
                    </p>

                </div>

                <img src={landingImage} alt="about-me" />
            </div>
        </Page>
    )
}