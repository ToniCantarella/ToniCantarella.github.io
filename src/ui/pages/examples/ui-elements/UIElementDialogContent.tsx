import React from "react"
import { Carousel } from "../../../common/Carousel"
import "./UIElementDialogContent.scss"

type UIElementDialogContentProps = {
    children: React.ReactNode
}

export const UIElementDialogContent = (props: UIElementDialogContentProps) => {
    return (
        <div id="ui-element-dialog-content">
            <Carousel>
                {props.children}
            </Carousel>
        </div>
    )
}