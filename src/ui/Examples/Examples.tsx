import { useTranslation } from "react-i18next"
import { Page } from "../common/Page"
import "./Examples.scss"
import { Card } from "../common/Card"
import React, { useState } from "react"
import { Dialog } from "../common/Dialog"
import { LoadingElements } from "./ui-elements/loaders/LoadingElements"
import LoaderIcon from "../../assets/loader.svg?react"
import ButtonIcon from "../../assets/button.svg?react"
import InputIcon from "../../assets/input.svg?react"
import ClickerIcon from "../../assets/clicker.svg?react"

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
                            icon={<LoaderIcon />}
                            label={t("examples.loaders")}
                            onClick={() =>
                                openDialog(
                                    t("examples.loaders"),
                                    <LoadingElements />
                                )
                            }
                        />

                        <ExampleCard
                            icon={<ButtonIcon />}
                            label={t("examples.buttons")}
                            onClick={() =>
                                openDialog(
                                    t("examples.buttons"),
                                    null
                                )
                            }
                        />

                        <ExampleCard
                            icon={<InputIcon />}
                            label={t("examples.input")}
                            onClick={() =>
                                openDialog(
                                    t("examples.input"),
                                    null
                                )
                            }
                        />
                    </ExampleSection>

                    <ExampleSection
                        title={t("examples.games")}
                    >
                        <ExampleCard
                            icon={<ClickerIcon />}
                            label={t("examples.clicker-game")}
                            onClick={() =>
                                openDialog(
                                    t("examples.clicker-game"),
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
    icon: React.ReactNode,
    label: string,
    onClick: () => void
}

const ExampleCard = (props: ExampleCardProps) => {
    return (
        <Card
            onClick={props.onClick}
        >
            <div
                className="card-content"
            >
                {props.icon}
                <span>{props.label}</span>
            </div>
        </Card>
    )
}