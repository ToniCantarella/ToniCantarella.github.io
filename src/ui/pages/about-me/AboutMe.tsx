import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import motorbikeImage from "../../../assets/motorbike.jpg"
import torchImage from "../../../assets/torch.jpg"
import winterImage from "../../../assets/winter.jpg"
import { Carousel } from "../../common/Carousel"
import { NavigationContext, Paths } from "../../navigation/NavigationBar"
import { Page } from "../Page"
import "./AboutMe.scss"

export const AboutMe = () => {
    const navContext = useContext(NavigationContext)
    const { t } = useTranslation()
    const yearsOfExperience = new Date().getFullYear() - new Date("2022-05-30").getFullYear()

    const images = [
        winterImage,
        motorbikeImage,
        torchImage
    ]

    return (
        <Page>
            <div id="about-me">
                <Carousel
                    stayDuration={10000}
                >
                    {images.map(image => (
                        <img src={image} alt="image" />
                    ))}
                </Carousel>

                <div id="article">
                    <p>
                        {t("about-me.intro", { year: yearsOfExperience })}
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
            </div>
        </Page>
    )
}