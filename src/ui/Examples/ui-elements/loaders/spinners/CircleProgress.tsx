import { useEffect, useState } from "react"
import { Loader } from "../Loader"
import "./CircleProgress.scss"

export const CircleProgress = () => {
    const [progress, setProgress] = useState<number>(0)
    const fullCirlce = 314

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev =>
                prev >= 100 ? 0 : prev + 1
            )
        }, 100)

        return () => clearInterval(interval)
    }, [])

    return (
        <Loader>
            <div id="circle-progress">
                <span>{`${progress}%`}</span>
                <svg >
                    <circle
                        cx="50%" cy="50%" r="50"
                        style={{
                            strokeDashoffset: `${fullCirlce - (progress * (fullCirlce / 100))}`
                        }}
                    />
                </svg>
            </div>
        </Loader>
    )
}