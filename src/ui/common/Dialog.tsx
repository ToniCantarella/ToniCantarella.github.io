import { ReactElement, useState } from "react"
import "./Dialog.scss"
import { Card } from "./Card"
import CloseIcon from "../assets/close.svg?react"

type DialogProps = {
    title?: string,
    onClose: () => void,
    children: ReactElement
}

export const Dialog = (props: DialogProps) => {
    const [isClosing, setIsClosing] = useState<boolean>(false)
    const outAnimationDelay = 200

    const onClose = () => {
        setIsClosing(true)
        setTimeout(() => {
            props.onClose()
        }, outAnimationDelay)
    }

    return (
        <div
            id="dialog"
            className={`${isClosing ? "closing" : ""}`}
            style={{
                animationDuration: `.${outAnimationDelay / 100}s`
            }}
        >
            <div id="inner">
                <div id="dialog-background" />
                <div id="dialog-content">
                    <Card>
                        <>
                            <div id="header">
                                {props.title &&
                                    <h1>{props.title}</h1>
                                }
                                <button
                                    id="close-button"
                                    onClick={onClose}>
                                    <CloseIcon />
                                </button>
                            </div>
                            <div id="card-content">
                                {props.children}
                            </div>
                        </>
                    </Card>
                </div>
            </div>
        </div>
    )
}