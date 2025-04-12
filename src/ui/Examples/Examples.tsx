import { useTranslation } from "react-i18next"
import { Page } from "../common/Page"
import "./Examples.scss"
import { Card } from "../common/Card"
import React, { useState } from "react"
import { Dialog } from "../common/Dialog"
import { LoadingElements } from "./ui-elements/loaders/LoadingElements"

export const Examples = () => {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false)
    const [dialogTitle, setDialogTitle] = useState<string>("")
    const [dialogContent, setDialogContent] = useState<React.ReactNode>(null)
    const { t } = useTranslation()

    const openDialog = (title: string, content: React.ReactNode) => {
        setDialogTitle(title)
        setDialogContent(content)
        setDialogOpen(true)
    }

    const closeDialog = () => {
        setDialogTitle("")
        setDialogContent(null)
        setDialogOpen(false)
    }

    return (
        <Page>
            <div id="examples">
                <h1>{t("navigation.examples")}</h1>
                <div className="examples-content">

                    <ExampleSection
                        title={t("examples.ui-elements")}
                    >
                        <ExampleCard
                            label={t("examples.loaders")}
                            image={""}
                            onClick={() =>
                                openDialog(
                                    t("examples.loaders"),
                                    <LoadingElements />
                                )
                            }
                        />

                        <ExampleCard
                            label={t("examples.")}
                            image={""}
                            onClick={() =>
                                openDialog(
                                    "",
                                    null
                                )
                            }
                        />

                        <ExampleCard
                            label={t("examples.")}
                            image={""}
                            onClick={() =>
                                openDialog(
                                    "",
                                    null
                                )
                            }
                        />
                    </ExampleSection>

                    <ExampleSection
                        title={t("examples.games")}
                    >
                        <ExampleCard
                            label={t("examples.")}
                            image={""}
                            onClick={() =>
                                openDialog(
                                    "",
                                    null
                                )
                            }
                        />
                    </ExampleSection>
                </div>
            </div>
            {dialogOpen &&
                <Dialog
                    title={dialogTitle}
                    onClose={() => closeDialog()}
                >
                    {dialogContent}
                </Dialog>
            }
        </Page>
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
        <Card>
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
        </Card>
    )
}