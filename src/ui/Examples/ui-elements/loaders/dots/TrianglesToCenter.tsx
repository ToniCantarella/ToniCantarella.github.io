import { Loader } from "../Loader"
import "./TrianglesToCenter.scss"

export const TrianglesToCenter = () => {
    return (
        <Loader>
            <div id="grid-to-center">
                {Array.from({ length: 3 }, (_, i) => (
                    <div
                        style={{
                            animationDelay: `.${i * 3}s`
                        }}
                    />
                ))}
            </div>
        </Loader>
    )
}