import { useTranslation } from "react-i18next"
import { Page } from "../common/Page"
import "./Examples.scss"
import { Card } from "../common/Card"
import React, { useState } from "react"
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
                        <div className="examples-content">

                            <ExampleSection
                                title={t("examples.ui-elements")}
                            >
                                <ExampleCard
                                    label={t("examples.loading")}
                                    image={""}
                                    onClick={() => setDialogOpen(true)}
                                />
                                <ExampleCard
                                    label={t("examples.loading")}
                                    image={""}
                                    onClick={() => setDialogOpen(true)}
                                />
                                <ExampleCard
                                    label={t("examples.loading")}
                                    image={""}
                                    onClick={() => setDialogOpen(true)}
                                />
                            </ExampleSection>

                            <ExampleSection
                                title={t("examples.games")}
                            >
                                <ExampleCard
                                    label={t("examples.loading")}
                                    image={""}
                                    onClick={() => setDialogOpen(true)}
                                />
                            </ExampleSection>
                        </div>
                    </div>
                    {dialogOpen &&
                        <Dialog
                            title={t("examples.loading")}
                            onClose={() => setDialogOpen(false)}
                        >
                            <div>
                                {t("examples.loading")}
                            </div>
                        </Dialog>
                    }
                </>
            </Page>
        </>
    )
}

type ExampleSectionProps = {
    title: string,
    children: React.ReactNode
}

const ExampleSection = (props: ExampleSectionProps) => {
    return (
        <div className="examples-section">
            <h2>{props.title}</h2>
            <div className="examples-grid">
                {props.children}
            </div>
        </div>
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