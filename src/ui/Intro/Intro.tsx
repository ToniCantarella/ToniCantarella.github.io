import "./Intro.scss"
import { AppContext } from "../../App"
import { useContext } from "react"

export const Intro = () => {
    const appContext = useContext(AppContext)
    const amountOfSwipes = 6

    return (
        <div id="intro">
            <div id="intro-content">
                <div
                    id="intro-logo"
                    onAnimationEnd={() => appContext.setIntroPlaying(false)}
                >
                    <h1>Toni Cantarella</h1>
                </div>
                {appContext.firstRender &&
                    <div id="start-buffer" />
                }
                {Array.from({ length: amountOfSwipes }, (_, i) => (
                    <div
                        key={i}
                        className="color-swipe"
                        style={{
                            animationDelay: `.${i}s`,
                            filter: `brightness(${(1 / amountOfSwipes) * (i + 1)})`
                        }}
                    >
                    </div>
                ))}

            </div>
        </div>
    )
}