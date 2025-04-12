import { Loader } from "../Loader"
import "./CircleSpiral.scss"

export const CircleSpiral = () => {
    return (
        <Loader>
            <div id="circle-spiral">
                {Array.from({ length: 10 }, (_, i) => (
                    <div
                        style={{
                            animationDelay: `.${i}s`
                        }}
                    >
                        <div style={{
                            animationDelay: `.${i}s`
                        }}></div>
                    </div>
                ))}
            </div>
        </Loader>
    )
}