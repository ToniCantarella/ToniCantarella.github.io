import { Loader } from "../Loader"
import "./CircleRegular.scss"

export const CircleRegular = () => {
    return (
        <Loader>
            <svg id="circle-regular">
                <circle cx="50%" cy="50%" r="50" />
            </svg>
        </Loader>
    )
}