import { useEffect, useState } from "react"
import { Loader } from "../Loader"
import "./ProgressBar.scss"

export const ProgressBar = () => {
    const [progress, setProgress] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev =>
                prev >= 100 ? 0 : prev + 1
            )
        }, 100)

        return () => clearInterval(interval)
    }, [])

    return (
        <Loader >
            <div id="progress-bar">
                <span>{`${progress}%`}</span>
                
                <div
                    className="bar"
                    style={{
                        width: `${progress}%`
                    }}
                >
                </div>
            </div>
        </Loader>
    )
}