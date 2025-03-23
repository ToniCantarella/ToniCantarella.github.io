import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from '../../public/locales/en/translation.json'
import fi from '../../public/locales/fi/translation.json'

export type Language = {
    lngCode: string,
    flag: string
}

export const SupportedLanguages: Language[] = [
    {
        lngCode: "en",
        flag: "-"
    },
    {
        lngCode: "fi",
        flag: "-"
    }
]

i18n
.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
        en: {translation: en},
        fi: {translation: fi}
    },
    fallbackLng: SupportedLanguages[0].lngCode,
    debug: true,
  });

export default i18n;