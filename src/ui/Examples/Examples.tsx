import { useTranslation } from "react-i18next"
import { Page } from "../common/Page"
import "./Examples.scss"
import { Card } from "../common/Card"

export const Examples = () => {
    const { t } = useTranslation()

    return (
        <Page>
            <div id="examples">
                <h1>{t("navigation.examples")}</h1>
                <div className="content">
                    <ExampleCard
                        image={""}
                        onClick={() => console.log("clicked")}
                    />
                </div>
            </div>
        </Page>
    )
}

type ExampleCardProps = {
    image: string,
    onClick: () => void
}

const ExampleCard = (props: ExampleCardProps) => {

    return (
        <Card >
            <>
                <div
                    className="image"
                    style={{
                        backgroundImage: `url(${props.image})`
                    }}
                />

                <div
                    className="card-content"
                    onClick={props.onClick}
                >
                    <span>UI Elements</span>
                </div>
            </>
        </Card>
    )
}