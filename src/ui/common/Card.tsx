import { ReactElement } from "react"
import "./Card.scss"

export const Card = (props: { children?: ReactElement | string}) => {
    return (
        <div
            className="card"
        >
            {props.children}
        </div>
    )
}