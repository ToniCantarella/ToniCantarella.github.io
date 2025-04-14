import { useTranslation } from "react-i18next"
import "./Switch.scss"
import { useState } from "react"

export const Switch = () => {
    const [on, setOn] = useState<boolean>(false)
    const { t } = useTranslation()

    return (
        <button
            id="switch"
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
                    className={`${on ? "on" : ""}`}
                />
            </div>
        </button>
    )
}