import React, { useState } from "react"
import "./UIElementDialogContent.scss"
import { IndexIndicator } from "../../../common/IndexIndicator"
import ArrowIcon from "../../../../assets/arrow.svg?react"

type UIElementDialogContentProps = {
    children: React.ReactNode
}

export const UIElementDialogContent = (props: UIElementDialogContentProps) => {
    const [selectedElement, setSelectedElement] = useState<number>(0)
    const amountOfChildren = React.Children.count(props.children)

    const getCurrentPositionStyle = (index: number): object => {
        if (index === selectedElement) {
            return { left: "50%", opacity: 1 }
        } else if (index < selectedElement) {
            return { left: "-200%" }
        } else {
            return { left: "200%" }
        }
    }

    const previousElement = () => {
        setSelectedElement(prev => (prev - 1 + amountOfChildren) % amountOfChildren)
    }

    const nextElement = () => {
        setSelectedElement(prev => (prev + 1) % amountOfChildren)
    }

    return (
        <div id="ui-element-dialog-content">
            <div id="ui-element-dialog-inner">
                {React.Children.map(props.children, (child, index) => (
                    <div
                        className="ui-element"
                        style={getCurrentPositionStyle(index)}
                    >
                        {child}
                    </div>
                ))}
            </div>
            <div className="controls">
                <IndexIndicator
                    length={amountOfChildren}
                    currentIndex={selectedElement}
                />
                <div className="buttons">
                    <button
                        className="previous-button"
                        onClick={() => previousElement()}
                    >
                        <ArrowIcon />
                    </button>
                    <button
                        className="next-button"
                        onClick={() => nextElement()}
                    >
                        <ArrowIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}