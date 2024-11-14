import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = "light" | "dark" | "system";


const ThemeContext = createContext<{theme: Theme, toggleTheme: ()=> void}>({
  theme: "light",
  toggleTheme: () => {},
});

export const useGetTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;  
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }
  
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  
  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    {children }
  </ThemeContext.Provider>
)
};
export default ThemeProvider