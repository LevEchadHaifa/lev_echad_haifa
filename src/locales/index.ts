import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import englishLocale from "./en";
import hebrewLocale from "./he";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translation: englishLocale
            },
            he: {
                translation: hebrewLocale
            }
        },
        lng: "en",
        fallbackLng: "en"
    });
