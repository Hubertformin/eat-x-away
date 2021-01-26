import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
import {enLang} from "./en";
import {frLang} from "./fr";

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
    en: enLang,
    fr: frLang,
};
// Set the locale once at the beginning of your app.
// i18n.locale = Localization.locale;
i18n.locale = 'fr';
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export function translate(key) {
    return i18n.t(key);
}