"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = (theme: any) => {
    setTheme(theme);
  };

  return (
    <button
      className={`flex items-center transition duration-300 focus:outline-none fixed bottom-5 right-5 hover:scale-[1.2]`}
      onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
    >
      <div
        className={`md:w-10 md:h-10 w-8 h-8 relative rounded-full flex justify-center items-center transition duration-500 transform ${
          theme === "dark" ? "bg-white" : "bg-dark"
        } p-1 text-white`}
      >
        {theme === "dark" ? (
          <MdDarkMode color="#741FF5" size={23} />
        ) : (
          <MdLightMode color="#ffffff" size={23} />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitch;
