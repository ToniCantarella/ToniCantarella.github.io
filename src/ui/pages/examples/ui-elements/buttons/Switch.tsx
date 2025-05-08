import { useState } from "react"
import { useTranslation } from "react-i18next"
import "./Switch.scss"

export const Switch = () => {
    const [on, setOn] = useState<boolean>(false)
    const { t } = useTranslation()

    return (
        <>
            {on &&
                <Confetti />
            }

            <button
                id="switch"
                className={`${on ? "on" : ""}`}
                onClick={() => setOn(!on)}
            >
                <div id="track">
                    <span id="on">
                        {t("examples.switch-on")}
                    </span>
                    <span id="off">
                        {t("examples.switch-off")}
                    </span>
                    <div
                        id="handle"
                    />
                </div>
            </button>
        </>
    )
}

const Confetti = () => {
    const amount = 20

    const confettis = [
        "🌸",
        "🏵️",
        "💮",
        "🌺"
    ]
    const confettiIndex = Math.floor(Math.random() * confettis.length)

    return (
        <>
            {Array.from({ length: amount }).map((_, index) => (
                <span
                    key={index}
                    className="confetti"
                    style={{
                        left: `${index * 5}%`,
                        animationDelay: `${Math.random() * index}s`
                    }}
                >
                    {confettis[confettiIndex]}
                </span>
            ))}
        </>
    )
}

//Math.random() * (100 - index) + index