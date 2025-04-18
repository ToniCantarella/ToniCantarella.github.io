import { useTranslation } from "react-i18next"
import { Page } from "../Page"

export const Contact = () => {
    const {t} = useTranslation()

    return (
        <Page>
            <div>
                {t("navigation.contact")}
            </div>
        </Page>
    )
}