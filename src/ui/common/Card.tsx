import React from "react"
import "./Card.scss"

export const Card = (props: { children: React.ReactNode }) => {
    return (
        <div className="card">
            {props.children}
        </div>
    )
}