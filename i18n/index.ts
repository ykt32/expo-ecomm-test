import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import translationEn from "./locales/en-US/translation.json";
import translationPt from "./locales/pt-BR/translation.json";
import translationZh from "./locales/zh-CN/translation.json";

// Configuração das traduções
const resources = {
  "pt_BR": { translation: translationPt },
  "en_US": { translation: translationEn },
  "zh_CN": { translation: translationZh },
};

const initI18n = async () => {
  let savedLanguage = await AsyncStorage.getItem("language");

  if (!savedLanguage) {
    const locales = Localization.getLocales();
    savedLanguage = locales.length > 0 ? locales[0].languageTag : "en_US"; // Default to English if no locale found
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    resources,
    lng: savedLanguage,
    fallbackLng: "en_US",
    interpolation: {
      escapeValue: false,
    },
  });
};

// Initialize i18n
initI18n();

export default i18n;
