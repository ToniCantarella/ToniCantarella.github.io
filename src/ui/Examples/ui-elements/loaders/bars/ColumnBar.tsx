import { Loader } from "../Loader"
import "./ColumnBar.scss"

export const ColumnBar = () => {
    return (
        <Loader>
            <div id="column-bar">
                {Array.from({ length: 6 }, (_, i) => (
                    <div
                        style={{
                            animationDelay: `.${i}s`
                        }}
                    />
                ))}
            </div>
        </Loader>
    )
}