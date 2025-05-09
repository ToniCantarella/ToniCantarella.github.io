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
    const amount = 10

    const confettis = [
        "🌸",
        "🏵️",
        "💮",
        "🌺"
    ]

    return (
        <>
            {Array.from({ length: amount }).map((_, index) => (
                <span
                    key={index}
                    className="confetti"
                    style={{
                        left: `${(index / amount) * 100}%`,
                        animationDelay: `${Math.random() * index}s`
                    }}
                >
                    {confettis[Math.floor(Math.random() * confettis.length)]}
                </span>
            ))}
        </>
    )
}

//Math.random() * (100 - index) + index