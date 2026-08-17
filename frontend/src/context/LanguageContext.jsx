import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { translations, DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../data/translations';
import { LANGUAGE_STORAGE_KEY } from '../data/site';

function readStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && SUPPORTED_LANGUAGES.includes(stored)) return stored;
  } catch {
    /* localStorage unavailable — fall back to default */
  }
  return DEFAULT_LANGUAGE;
}

const LanguageContext = createContext({
  lang: DEFAULT_LANGUAGE,
  setLang: () => {},
  t: translations[DEFAULT_LANGUAGE],
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLanguage);

  useEffect(() => {
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
      /* ignore storage errors */
    }
    document.documentElement.lang = lang;
    document.title =
      lang === 'ta'
        ? 'கிறிஸ்துவின் சபை — Church Of Christ, Dindukkal'
        : 'Church Of Christ — கிறிஸ்துவின் சபை, Dindukkal';
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState((current) => (SUPPORTED_LANGUAGES.includes(next) ? next : current));
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang] || translations[DEFAULT_LANGUAGE] }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  return useContext(LanguageContext);
}
