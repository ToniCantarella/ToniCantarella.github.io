import { Loader } from "../Loader"
import "./CircleRegular.scss"

export const CircleRegular = () => {
    return (
        <Loader>
            <svg id="circle-regular" viewBox="0 0 100 100">
                <circle cx="50%" cy="50%" r="40" />
            </svg>
        </Loader>
    )
}