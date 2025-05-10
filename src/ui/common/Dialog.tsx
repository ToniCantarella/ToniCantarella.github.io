import { useState } from "react"
import "./Dialog.scss"
import { Card } from "./Card"
import CloseIcon from "../../assets/close.svg?react"
import { createPortal } from "react-dom"
import { useTranslation } from "react-i18next"

type DialogProps = {
    title?: string,
    onClose: () => void,
    children: React.ReactNode
}

export const Dialog = (props: DialogProps) => {
    const [isClosing, setIsClosing] = useState<boolean>(false)
    const { t } = useTranslation()
    const outAnimationDelay = 200

    const onClose = () => {
        setIsClosing(true)
        setTimeout(() => {
            props.onClose()
        }, outAnimationDelay)
    }

    return createPortal(
        <div
            id="dialog"
            className={`${isClosing ? "closing" : ""}`}
            style={{
                animationDuration: `.${outAnimationDelay / 100}s`
            }}
        >
            <div id="inner">
                <div id="dialog-background" onClick={onClose} />
                    <Card>
                        <div id="header">
                            {props.title &&
                                <h1>{t(props.title)}</h1>
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
                    </Card>
            </div>
        </div>,
        document.getElementById("app-content")!
    )
}