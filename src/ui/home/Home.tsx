import Page from "../common/Page";
import {useTranslation} from "react-i18next";

export default function Home() {
    const {t} = useTranslation()
    const now = new Date()
    const firstDayOfWork = new Date("2022-05-30")
    const years = now.getFullYear() - firstDayOfWork.getFullYear()
    const months = now.getMonth() - firstDayOfWork.getMonth()
    const monthsString = months > 6 ? ",5" : ""
    const yearsOfExperience = `${years}${monthsString}`

    return (
        <Page>
            {t("home.introduction", {yearsOfExperience: yearsOfExperience})}
        </Page>
    )
}