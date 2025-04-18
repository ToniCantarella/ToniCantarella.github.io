import { Loader } from "../Loader"
import "./DotsGrid.scss"

export const DotsGrid = () => {
    return (
        <Loader>
            <div id="dots-grid">
                {Array.from({ length: 9 }, (_, i) => (
                    <div
                        key={i}
                        className="dot"
                        style={{
                            animationDelay: `.${i}s`
                        }}
                    />
                ))}
            </div>
        </Loader>
    )
}