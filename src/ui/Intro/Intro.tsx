import "./Intro.scss"
import { AppContext } from "../../App"
import { useContext, useState } from "react"

export const Intro = () => {
    const [logoRemove, setLogoRemove] = useState<boolean>(false)
    const [playLogo, setPlayLogo] = useState<boolean>(false)
    const appContext = useContext(AppContext)
    const amountOfSwipes = 6
    const logoText = "Toni Cantarella"

    return (
        <div id="intro">
            <div id="intro-content">
                <div
                    id="intro-logo-wrapper"
                    style={{
                        animation: `${logoRemove ? "introLogoRemove .5s ease forwards" : "introLogoAdd 1s ease 1s forwards"}`
                    }}
                    onAnimationEnd={(e) => e.animationName === "introLogoRemove" && appContext.setIntroPlaying(false)}
                >
                    {playLogo &&
                        <h1>
                            {logoText.split("").map((char, index) => (
                                <span
                                    key={index}
                                    style={{
                                        animationDelay: `${index * 50}ms`
                                    }}
                                    className={`${index < 4 && "first-name"}`}
                                    onAnimationEnd={() => index === logoText.length - 1 && setLogoRemove(true)}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </h1>
                    }
                </div>
                {appContext.firstRender &&
                    <div id="start-buffer" />
                }
                {Array.from({ length: amountOfSwipes }, (_, i) => (
                    <div
                        key={i}
                        className="color-swipe"
                        onAnimationEnd={() => { i === 0 && setPlayLogo(true) }}
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