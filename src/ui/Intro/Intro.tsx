import "./Intro.scss"
import { AppContext } from "../../App"
import { useContext } from "react"

export const Intro = () => {
    const appContext = useContext(AppContext)

    const stopPlaying = (animationName: string) => {
        if (animationName.includes("introExitAnimation")) {
            appContext.setIntroPlaying(false)
        }
    }

    return (
        <div
            id="intro"
            className={`${appContext.firstRender ? "" : "with-start-animation"}`}
            onAnimationEnd={e => stopPlaying(e.animationName)}
        >

        </div>
    )
}