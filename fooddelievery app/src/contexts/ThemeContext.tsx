import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
type Season = 'normal' | 'christmas' | 'newyear';

interface ThemeContextType {
  theme: Theme;
  season: Season;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as Theme) || 'light';
  });
  const [season, setSeason] = useState<Season>('normal');

  useEffect(() => {
    // Update document class for dark mode
    document.documentElement.classList.toggle('dark', theme === 'dark');
    // Save theme preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Check for seasonal themes
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();

    if (month === 11 && day >= 15 && day <= 31) {
      setSeason('christmas');
    } else if ((month === 11 && day === 31) || (month === 0 && day <= 2)) {
      setSeason('newyear');
    } else {
      setSeason('normal');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, season, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};