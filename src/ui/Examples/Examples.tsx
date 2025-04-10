import { useTranslation } from "react-i18next"
import { Page } from "../common/Page"
import "./Examples.scss"
import { Card } from "../common/Card"
import { useState } from "react"
import { Dialog } from "../common/Dialog"

export const Examples = () => {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false)
    const { t } = useTranslation()

    return (
        <>
            <Page>
                <>
                    <div id="examples">
                        <h1>{t("navigation.examples")}</h1>
                        <div className="content">
                            <ExampleCard
                                label={t("examples.ui-elements")}
                                image={""}
                                onClick={() => setDialogOpen(true)}
                            />
                        </div>
                    </div>
                    {dialogOpen &&
                        <Dialog
                            title={t("examples.ui-elements")}
                            onClose={() => setDialogOpen(false)}
                        >
                            <div>
                                {t("examples.ui-elements")}
                            </div>
                        </Dialog>
                    }
                </>
            </Page>


        </>
    )
}

type ExampleCardProps = {
    label: string,
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
                    <span>{props.label}</span>
                </div>
            </>
        </Card>
    )
}