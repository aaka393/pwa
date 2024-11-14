import React from 'react';
import { useGetTheme } from './ThemeProvider'; 


const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useGetTheme();

  return (
    <div className="p-6 flex justify-center items-center space-x-4">
      <div>
        <p className="text-xl font-semibold">Current theme: {theme}</p>
      </div>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
