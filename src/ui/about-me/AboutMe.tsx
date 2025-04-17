import { useTranslation } from "react-i18next"
import { Page } from "../common/Page"
import "./AboutMe.scss"
import { Link } from "react-router-dom"
import { NavigationContext, Paths } from "../navigation/NavigationBar"
import { useContext, useEffect, useState } from "react"
import winterImage from "../../assets/winter.jpg"
import motorbikeImage from "../../assets/motorbike.jpg"
import torchImage from "../../assets/torch.jpg"
import { image, pre } from "framer-motion/client"

export const AboutMe = () => {
    const navContext = useContext(NavigationContext)
    const { t } = useTranslation()
    const year = new Date().getFullYear() - new Date("2022-05-30").getFullYear()

    return (
        <Page>
            <div id="about-me">
                <ImageCarousel />

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
            </div>
        </Page>
    )
}

const ImageCarousel = () => {
    const [currentImage, setCurrentImage] = useState<number>(0)
    const animationDuration = 10000

    const images = [
        winterImage,
        torchImage,
        motorbikeImage
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % images.length)
        }, animationDuration)
        return () => clearInterval(interval)
    }, [])

    return (
        <div id="image-carousel">
                <img
                    key={currentImage}
                    src={images[currentImage]}
                    alt="about-me"
                    style={{
                        animationDuration: `${animationDuration / 1000}s`
                    }}
                />
        </div>
    )
}