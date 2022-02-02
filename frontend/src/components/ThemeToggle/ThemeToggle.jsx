import { useState, useEffect } from "react";
import "./ThemeToggle.scss";

export default function ThemeToggle({ className }) {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode"));

  const enableDarkMode = () => {
    localStorage.setItem("darkMode", "true");
    setDarkMode(localStorage.getItem("darkMode"));
    document.body.classList.add("dark-mode");
  };

  const disableDarkMode = () => {
    localStorage.setItem("darkMode", "false");
    setDarkMode(localStorage.getItem("darkMode"));
    document.body.classList.remove("dark-mode");
  };

  const toggleDarkMode = () => {
    if (darkMode === "true") {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  };

  useEffect(() => {
    if (darkMode === "true") {
      enableDarkMode();
    }
  }, []);

  return (
    <button
      className={`themeToggle ${className}`}
      type="button"
      onClick={toggleDarkMode}
      data-state={darkMode}
    >
      <svg
        aria-hidden="true"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#7E88C3" fillRule="nonzero" />
      </svg>
    </button>
  );
}
