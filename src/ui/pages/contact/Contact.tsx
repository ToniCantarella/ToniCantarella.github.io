import { useTranslation } from "react-i18next"
import CupImage from "../../../assets/images/cup.jpg"
import GithubIcon from "../../../assets/svg/github.svg?react"
import LinkedInIcon from "../../../assets/svg/linkedin.svg?react"
import { Page } from "../Page"
import "./Contact.scss"

const preloadedCup = new Image();
preloadedCup.src = CupImage;

export const Contact = () => {
    const { t } = useTranslation()

    return (
        <Page>
            <div id="contact">
                <div id="background-image-container">
                    <div
                        id="background-image"
                        style={{
                            backgroundImage: `url(${CupImage})`
                        }}
                    />
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