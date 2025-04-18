import { Loader } from "../Loader"
import "./CrissCross.scss"

export const CrissCross = () => {
    return (
        <Loader>
            <div id="criss-cross">
                <div id="criss"/>
                <div id="cross"/>
            </div>
        </Loader>
    )
}