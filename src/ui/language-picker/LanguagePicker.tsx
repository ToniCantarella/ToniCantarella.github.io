import type {ReactElement} from "react";
import FinlandFlag from "../../assets/icons/finland.svg?react"
import EnglandFlag from "../../assets/icons/england.svg?react"
import {useTranslation} from "react-i18next";

export type Language = {
    lngCode: string,
    flag: ReactElement
}

export const SupportedLanguages: Language[] = [
    {
        lngCode: "en",
        flag: <EnglandFlag className="h-6 w-6"/>
    },
    {
        lngCode: "fi",
        flag: <FinlandFlag className="h-6 w-6"/>
    }
]

export default function LanguagePicker() {
    const {i18n} = useTranslation()

    return (
        <div>
            {SupportedLanguages.map((language) => (
                <button
                    key={language.lngCode}
                    onClick={() => {i18n.changeLanguage(language.lngCode)}}
                    className=""
                    style={{ backgroundImage: `url(${language.flag})` }}
                >
                    {language.flag}
                </button>
            ))}
        </div>
    )
}