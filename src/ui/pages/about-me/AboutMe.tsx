import { useContext, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import ArrowIcon from "../../../assets/arrow.svg?react"
import motorbikeImage from "../../../assets/motorbike.jpg"
import torchImage from "../../../assets/torch.jpg"
import winterImage from "../../../assets/winter.jpg"
import { IndexIndicator } from "../../common/IndexIndicator"
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
                <ImageCarousel
                    images={images}
                />

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

const ImageCarousel = (props: { images: string[] }) => {
    const [loadingImages, setLoadingImages] = useState<boolean>(true)
    const [currentImage, setCurrentImage] = useState<number>(0)
    const [animateIn, setAnimateIn] = useState<boolean>(true)
    const [direction, setDirection] = useState<boolean>(true)
    const [progress, setProgress] = useState<number>(0)
    const intervalRef = useRef<number | null>(null)
    const stayDuration = 10000
    const animationDuration = 500

    const loadImages = () => {
        props.images.forEach((source, index) => {
            const img = new Image()
            img.src = source
            if (index === 0) {
                setLoadingImages(false)
            }
        })
    }

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
            setCurrentImage(prev => (prev + 1) % props.images.length)
            handleInterval()
        }, animationDuration)
    }

    const previousImage = () => {
        clearInterval(intervalRef.current!)
        setDirection(false)
        setAnimateIn(false)
        setTimeout(() => {
            setAnimateIn(true)
            setCurrentImage(prev => (prev - 1 + props.images.length) % props.images.length)
            handleInterval()
        }, animationDuration)
    }

    useEffect(() => {
        loadImages()
    }, [])

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
            {!loadingImages &&
                <img
                    key={currentImage}
                    src={props.images[currentImage]}
                    alt="about-me"
                    style={{
                        animationDuration: `${animationDuration / 1000}s`,
                        animationName: animationName(),
                        animationTimingFunction: "ease",
                        animationFillMode: "forwards",
                    }}
                />
            }

            <ImageProgressBar
                progress={progress}
            />
            <IndexIndicator
                length={props.images.length}
                currentIndex={currentImage}
            />

            <div id="image-controls">
                <button
                    id="previous-image"
                    onClick={() => previousImage()}
                >
                    <ArrowIcon />
                </button>
                <button
                    id="next-image"
                    onClick={() => nextImage()}
                >
                    <ArrowIcon />
                </button>
            </div>
        </div>
    )
}

const ImageProgressBar = (props: { progress: number }) => {
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