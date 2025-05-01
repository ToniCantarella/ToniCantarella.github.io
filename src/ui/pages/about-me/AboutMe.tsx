import { useTranslation } from "react-i18next"
import { Page } from "../Page"
import "./AboutMe.scss"
import { Link } from "react-router-dom"
import { NavigationContext, Paths } from "../../navigation/NavigationBar"
import { useContext, useEffect, useRef, useState } from "react"
import winterImage from "../../../assets/winter.jpg"
import motorbikeImage from "../../../assets/motorbike.jpg"
import torchImage from "../../../assets/torch.jpg"
import { Card } from "../../common/Card"

export const AboutMe = () => {
    const navContext = useContext(NavigationContext)
    const { t } = useTranslation()
    const yearsOfExperience = new Date().getFullYear() - new Date("2022-05-30").getFullYear()

    return (
        <Page>
            <div id="about-me">
                <ImageCarousel />

                <Card>
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
                </Card>
            </div>
        </Page>
    )
}

const ImageCarousel = () => {
    const [currentImage, setCurrentImage] = useState<number>(0)
    const [animateIn, setAnimateIn] = useState<boolean>(true)
    const [direction, setDirection] = useState<boolean>(true)
    const [progress, setProgress] = useState<number>(0)
    const intervalRef = useRef<number | null>(null)
    const stayDuration = 10000
    const animationDuration = 500

    const images = [
        winterImage,
        motorbikeImage,
        torchImage
    ]

    const handleInterval = () => {
        setProgress(0)
        clearInterval(intervalRef.current!)
        intervalRef.current = setInterval(() => {
            nextImage()
        }, stayDuration)
    }

    const nextImage = () => {
        clearInterval(intervalRef.current!)
        setAnimateIn(false)
        setDirection(true)
        setTimeout(() => {
            setAnimateIn(true)
            setCurrentImage(prev => (prev + 1) % images.length)
            handleInterval()
        }, animationDuration)
    }

    const previousImage = () => {
        clearInterval(intervalRef.current!)
        setDirection(false)
        setAnimateIn(false)
        setTimeout(() => {
            setAnimateIn(true)
            setCurrentImage(prev => (prev - 1 + images.length) % images.length)
            handleInterval()
        }, animationDuration)
    }

    useEffect(() => {
        handleInterval()
        return () => clearInterval(intervalRef.current!)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev =>
                prev >= 100 ? 0 : prev + 1
            )
        }, stayDuration / 100)

        return () => clearInterval(interval)
    }, [progress])

    const animationName = () => {
        const base = direction ? 'imageCarousel' : 'imageCarouselPrev'
        return animateIn ? `${base}In` : `${base}Out`
    }

    return (
        <div id="image-carousel">
            <img
                key={currentImage}
                src={images[currentImage]}
                alt="about-me"
                style={{
                    animationDuration: `${animationDuration / 1000}s`,
                    animationName: animationName(),
                    animationTimingFunction: "ease",
                    animationFillMode: "forwards",
                }}
            />

            <ImageLoading
                progress={progress}
            />
            <Indicator
                length={images.length}
                currentIndex={currentImage}
            />

            <div id="image-controls">
                <button
                    onClick={() => previousImage()}
                >{'<'}</button>
                <button
                    onClick={() => nextImage()}
                >{'>'}</button>
            </div>
        </div>
    )
}

const Indicator = (props: { length: number, currentIndex: number }) => {

    return (
        <div id="image-indicator">
            <div
                id="current"
                className="indicator"
                style={{
                    left: `calc(${props.currentIndex} * var(--indicator-size) * 2)`
                }}
            />
            {Array.from({ length: props.length }, (_, indicator) => (
                <div
                    key={indicator}
                    className="indicator"
                />
            ))}
        </div>
    )
}

const ImageLoading = (props: { progress: number }) => {
    return (
        <div
            id="image-loading"
        >
            <div
                id="loader"
                style={{
                    width: `${props.progress}%`
                }}
            />
        </div>
    )
}