import { useTranslation } from "react-i18next"
import { Page } from "../Page"
import "./Contact.scss"
import GithubIcon from "../../../assets/github.svg?react"
import LinkedInIcon from "../../../assets/linkedin.svg?react"

export const Contact = () => {
    const { t } = useTranslation()

    return (
        <Page>
            <div id="contact">
                <h1>
                    {t("navigation.contact")}
                </h1>
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
                    <p>{t("contact.image-credits")}<a href="https://www.valokuvaajarosabianca.fi/" target="_blank">Rosa</a></p>
                </div>
            </div>
        </Page>
    )
}