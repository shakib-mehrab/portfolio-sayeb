import { useEffect, useState } from 'react';

export type Theme = 'night' | 'day';

const STORAGE_KEY = 'sayeb-theme';

function readStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'day' || stored === 'night') return stored;
  } catch {
    // Storage can be blocked; fall back to night.
  }
  return 'night';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readStoredTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore: the theme still applies for this visit.
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'night' ? 'day' : 'night'));
  return { theme, toggle };
}
