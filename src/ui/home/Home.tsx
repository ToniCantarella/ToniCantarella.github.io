import Page from "../common/Page";
import {useTranslation} from "react-i18next";

export default function Home() {
    const {t} = useTranslation()

    return (
        <Page>
            {t("home.introduction")}
        </Page>
    )
}