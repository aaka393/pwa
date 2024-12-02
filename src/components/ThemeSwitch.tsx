import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React from "react";
import useThemeStore from "../store/themeStore";

const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useThemeStore();

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div onClick={handleThemeToggle}>
      {theme === "light" ? (
        <MoonIcon width={30} />
      ) : (
        <SunIcon width={30} className="text-black" />
      )}
    </div>
  );
};

export default ThemeSwitch;
