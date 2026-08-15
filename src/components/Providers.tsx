'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { dictionaries, type UiDict } from '@/lib/i18n';
import type { Lang } from '@/lib/data';

type Theme = 'dark' | 'light';

interface I18nContextValue {
  lang: Lang;
  t: UiDict;
  setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18nContextValue>({
  lang: 'id',
  t: dictionaries.id,
  setLang: () => {},
});

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggleTheme: () => {},
});

export function useLang(): I18nContextValue {
  return useContext(I18nContext);
}

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}

export function Providers({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('id');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('rks-theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem('rks-theme', next);
      return next;
    });
  }, []);

  const i18nValue = useMemo(
    () => ({ lang, t: dictionaries[lang], setLang }),
    [lang, setLang]
  );

  const themeValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  return (
    <I18nContext.Provider value={i18nValue}>
      <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
    </I18nContext.Provider>
  );
}
