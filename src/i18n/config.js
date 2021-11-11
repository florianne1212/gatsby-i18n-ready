import i18next from 'i18next';

import translationEN from "../locales/en/translation.json";
import translationFR from "../locales/fr/translation.json";

i18next.init({
    fallbackLng: 'en',
    resources: {
        fr: {
            translations: translationEN
        },
        en: {
            translations: translationFR
        }
    },
    ns: ['translations'],
    defaultNS: 'translations',
    returnObjects: true,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
    react: {
		useSuspense: true,
    },
});

i18next.languages = ['en', 'fr'];

export default i18next;