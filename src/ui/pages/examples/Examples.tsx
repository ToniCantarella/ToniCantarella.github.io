import { useTranslation } from "react-i18next"
import "./Examples.scss"
import React, { useContext, useState } from "react"
import { LoadingElements } from "./ui-elements/loaders/LoadingElements"
import LoaderIcon from "../../../assets/loader.svg?react"
import ButtonIcon from "../../../assets/button.svg?react"
import InputIcon from "../../../assets/input.svg?react"
import ClickerIcon from "../../../assets/clicker.svg?react"
import RockIcon from "../../../assets/rock.svg?react"
import PaperIcon from "../../../assets/paper.svg?react"
import ScissorsIcon from "../../../assets/scissors.svg?react"
import { ButtonElements } from "./ui-elements/buttons/ButtonElements"
import { Page } from "../Page"
import { Dialog } from "../../common/Dialog"
import { Card } from "../../common/Card"
import { ClickerGame } from "./games/clicker/Clicker"
import { RockPaperScissorsGame } from "./games/rock-paper-scissors/RockPaperScissors"
import { InputElements } from "./ui-elements/input/InputElements"
import { Link } from "react-router-dom"
import { NavigationContext, Paths } from "../../navigation/NavigationBar"

export const Examples = () => {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false)
    const [dialogTitle, setDialogTitle] = useState<string>("")
    const [dialogContent, setDialogContent] = useState<React.ReactNode>(null)
    const { t } = useTranslation()
    const navContext = useContext(NavigationContext)

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
                <div className="examples-content">

                    <ExampleSection
                        title={t("examples.ui-elements")}
                    >
                        <ExampleCard
                            icon={<LoaderIcon />}
                            label={t("examples.loaders")}
                            onClick={() =>
                                openDialog(
                                    "examples.loaders",
                                    <LoadingElements />
                                )
                            }
                        />

                        <ExampleCard
                            icon={<ButtonIcon />}
                            label={t("examples.buttons")}
                            onClick={() =>
                                openDialog(
                                    "examples.buttons",
                                    <ButtonElements />
                                )
                            }
                        />

                        <ExampleCard
                            icon={<InputIcon />}
                            label={t("examples.input")}
                            onClick={() =>
                                openDialog(
                                    "examples.input",
                                    <InputElements />
                                )
                            }
                        />
                    </ExampleSection>

                    {import.meta.env.MODE === "development" &&
                        <ExampleSection
                            title={t("examples.games")}
                        >
                            <ExampleCard
                                icon={<ClickerIcon />}
                                label={t("examples.clicker-game")}
                                onClick={() =>
                                    openDialog(
                                        "examples.clicker-game",
                                        <ClickerGame />
                                    )
                                }
                            />

                            <ExampleCard
                                icon={
                                    <>
                                        <RockIcon />
                                        <PaperIcon />
                                        <ScissorsIcon />
                                    </>
                                }
                                label={t("examples.rock-paper-scissors")}
                                onClick={() =>
                                    openDialog(
                                        "examples.rock-paper-scissors",
                                        <RockPaperScissorsGame />
                                    )
                                }
                            />
                        </ExampleSection>
                    }

                    <p className="outro-article">
                        {t("examples.outro-article")}
                        <Link
                            onClick={() => navContext.onNavClick(Paths.CONTACT)}
                            to={Paths.CONTACT}
                        >
                            {`${t("examples.to-contact")}`}
                        </Link>
                    </p>
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
                <div className="example-icon">
                    {props.icon}
                </div>
                <span>{props.label}</span>
            </div>
        </Card>
    )
}