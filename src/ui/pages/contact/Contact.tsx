import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import CupImage from "../../../assets/cup.jpg"
import GithubIcon from "../../../assets/github.svg?react"
import LinkedInIcon from "../../../assets/linkedin.svg?react"
import { Page } from "../Page"
import "./Contact.scss"

export const Contact = () => {
    const [imageLoading, setImageLoading] = useState<boolean>(true)
    const { t } = useTranslation()

    useEffect(() => {
        const img = new Image()
        img.src = CupImage
        img.onload = () => setImageLoading(false)
    }, [])

    return (
        <Page>
            <div id="contact">
                <div id="background-image-container">
                    {!imageLoading &&
                        <div
                            id="background-image"
                            style={{
                                backgroundImage: `url(${CupImage})`
                            }}
                        />
                    }
                </div>
                <div id="contact-info">
                    <p>toni.cantarella@outlook.com</p>
                    <div id="socials">
                        <a href="https://www.linkedin.com/in/toni-cantarella-957077207/" target="_blank">
                            <LinkedInIcon />
                        </a>
                        <a href="https://github.com/ToniCantarella" target="_blank">
                            <GithubIcon />
                        </a>
                    </div>
                    <div>
                        <p>{t("contact.image-credits")}<a href="https://www.valokuvaajarosabianca.fi/" target="_blank">Rosa</a></p>
                        <p id="old-site-text">{t("contact.old-site-text")}<a href="/old/">{t("contact.old-site-link")}</a></p>
                    </div>
                </div>
            </div>
        </Page>
    )
}