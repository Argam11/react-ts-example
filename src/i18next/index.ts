import i18next from "i18next";
import Backend from "i18next-http-backend";

// import en from "./en.json";

i18next.use(Backend).init({
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "hy", "ru", "ar", "fr", "es", "fa"],
  defaultNS: "common",
  backend: {
    loadPath: "/locales/{{lng}}.json",
  },
});

export const t = i18next.t.bind(i18next);

export default i18next;
