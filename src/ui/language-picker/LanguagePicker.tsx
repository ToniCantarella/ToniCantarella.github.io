import { useTranslation } from "react-i18next"
import "./LanguagePicker.scss"
import FinlandFlag from "../../assets/finland.svg?react"
import EnglandFlag from "../../assets/england.svg?react"
import { ReactElement, useEffect } from "react"

export type Language = {
    lngCode: string,
    flag: ReactElement
}

export const SupportedLanguages: Language[] = [
    {
        lngCode: "en",
        flag: <EnglandFlag />
    },
    {
        lngCode: "fi",
        flag: <FinlandFlag />
    }
]

export const LanguagePicker = () => {
    const { i18n } = useTranslation()

    useEffect(() => {
console.log(i18n.language)
    }, [])

    return (
        <div id="language-picker">
            {SupportedLanguages.map(language =>
                <button
                    key={language.lngCode}
                    className={`language ${i18n.language.includes(language.lngCode) ? "selected" : ""}`}
                    onClick={() => i18n.changeLanguage(language.lngCode)}
                >
                    {language.flag}
                </button>
            )}
        </div>
    )
}