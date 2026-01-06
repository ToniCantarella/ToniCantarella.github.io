import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import motorbikeImage from "../../../assets/images/motorbike.jpg"
import torchImage from "../../../assets/images/torch.jpg"
import winterImage from "../../../assets/images/winter.jpg"
import { Carousel } from "../../common/Carousel"
import { NavigationContext, Paths } from "../../navigation/NavigationBar"
import { Page } from "../Page"
import "./AboutMe.scss"

const images = [winterImage, motorbikeImage, torchImage];

images.forEach((src) => {
  const img = new Image();
  img.src = src;
});

export const AboutMe = () => {
    const navContext = useContext(NavigationContext)
    const { t } = useTranslation()
    const now = new Date()
    const firstDayOfWork = new Date("2022-05-30")
    const years = now.getFullYear() - firstDayOfWork.getFullYear()
    const months = now.getMonth() - firstDayOfWork.getMonth()
    const monthsString = months > 6 ? ",5" : ""
    const yearsOfExperience = `${years}${monthsString}`

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