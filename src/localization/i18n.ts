import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from './locales/en/translation.json'
import fi from './locales/fi/translation.json'
import { SupportedLanguages } from '../ui/language-picker/LanguagePicker'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            fi: { translation: fi }
        },
        fallbackLng: SupportedLanguages[0].lngCode,
        debug: true,
    });

export default i18n;