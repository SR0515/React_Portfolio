
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ko from './langs/ko/translation.json';
import en from './langs/en/translation.json';
import ja from './langs/ja/translation.json';
import zh from './langs/zh/translation.json';

const resources = {
  ko: { translation: ko },
  en: { translation: en },
  ja: { translation: ja },
  zh: { translation: zh },
};

i18n.use(initReactI18next).init({
  resources,
  lng: sessionStorage.getItem('appLanguage') || 'ko',
  fallbackLng: 'ko',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
