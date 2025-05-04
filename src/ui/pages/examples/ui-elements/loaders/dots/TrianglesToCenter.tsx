import { Loader } from "../Loader"
import "./TrianglesToCenter.scss"

export const TrianglesToCenter = () => {
    return (
        <Loader>
            <div className="grid-to-center">
                {Array.from({ length: 3 }, (_, i) => (
                    <div
                        key={i}
                        style={{
                            animationDelay: `${i}s`
                        }}
                    />
                ))}
            </div>
        </Loader>
    )
}