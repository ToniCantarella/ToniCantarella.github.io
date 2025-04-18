import { Loader } from "../Loader"
import "./Ellipsis.scss"

export const Ellipsis = () => {
    return (
        <Loader>
            <div id="ellipsis">
                {Array.from({ length: 3 }, (_, i) => (
                    <div
                        key={i}
                        style={{
                            animationDelay: `.${i * 3}s`
                        }}
                    />
                ))}
            </div>
        </Loader>
    )
}