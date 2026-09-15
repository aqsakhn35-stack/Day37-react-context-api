import { createContext, useContext, useState, useEffect } from "react";

// 1. Context create karo
const ThemeContext = createContext();

// 2. Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // localStorage se saved theme uthao (agar hai)
    return localStorage.getItem("wanderlist-theme") || "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("wanderlist-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom hook — components isse consume karenge
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}