import React from "react"
import "./Card.scss"

type CardProps = {
    onClick?: () => void,
    children: React.ReactNode
}

export const Card = (props: CardProps) => {
    return (
        <div
            className={`card ${props.onClick ? "clickable" : ""}`}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    )
}