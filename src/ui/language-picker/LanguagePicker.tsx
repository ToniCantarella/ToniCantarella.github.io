import { useTranslation } from "react-i18next"
import { SupportedLanguages } from "../../localization/i18n"

export const LanguagePicker = () => {
    const { t, i18n } = useTranslation()

    return (
        <div>
            {SupportedLanguages.map(language =>
                <button
                    key={language.lngCode}
                    onClick={() => i18n.changeLanguage(language.lngCode)}
                >
                    {language.lngCode}
                </button>
            )}
        </div>
    )
}