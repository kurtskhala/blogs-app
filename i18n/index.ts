import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

import loginPageKa from "./ka/pages/login.json";
import loginPageEn from "./en/pages/login.json";

import headerKa from "./ka/pages/header.json";
import headerEn from "./en/pages/header.json";

import registerPageKa from "./ka/pages/register.json";
import registerPageEn from "./en/pages/register.json";

const options = {
  order: ['path'],

  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  htmlTag: document.documentElement,
}

const langDetector = new LanguageDetector();

const resources = {
  en: {
    translation: {
      "header" : headerEn,
      "login-page" : loginPageEn,
      "register-page" : registerPageEn
    }
  },
  ka: {
    translation: {
      "header" : headerKa,
      "login-page" : loginPageKa,
      "register-page" : registerPageKa
    }
  }
};

i18n
  .use(langDetector)
  .use(initReactI18next)
  .init({
    resources,
    detection: options,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;