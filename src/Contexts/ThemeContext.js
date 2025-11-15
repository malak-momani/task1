import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../useLocalStorage/useLocalStorage";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useLocalStorage('theme',
        localStorage.getItem('theme') || "light")

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        } localStorage.setItem("theme", theme)
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : 'light');
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}



export { ThemeContext, ThemeProvider }