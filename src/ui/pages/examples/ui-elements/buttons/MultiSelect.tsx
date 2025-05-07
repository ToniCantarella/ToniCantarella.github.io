import { useTranslation } from "react-i18next"
import "./MultiSelect.scss"
import { useState } from "react"

export const MultiSelectButton = () => {
    const [bold, setBold] = useState<boolean>(false)
    const [italics, setItalics] = useState<boolean>(false)
    const [underline, setUnderline] = useState<boolean>(false)
    const { t } = useTranslation()

    return (
        <div id="multiselect">
            <div id="buttons">
                <button
                    id="bold"
                    className={`${bold ? "selected" : ""}`}
                    onClick={() => setBold(!bold)}
                >
                    <span>B</span>
                </button>
                <div className="divider"/>
                <button
                    id="italics"
                    className={`${italics ? "selected" : ""}`}
                    onClick={() => setItalics(!italics)}
                >
                    <span>i</span>
                </button>
                <div className="divider"/>
                <button
                    id="underline"
                    className={`${underline ? "selected" : ""}`}
                    onClick={() => setUnderline(!underline)}
                >
                    <span>U</span>
                </button>
            </div>

            <span 
                style={{
                    fontWeight: `${bold ? "bolder" :""}`,
                    fontStyle: `${italics ? "italic" :""}`,
                    textDecoration: `${underline ? "underline" :""}`
                }}
            >
                {t("examples.multiselect-sample-text")}
                </span>
        </div>
    )
}