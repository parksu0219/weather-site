import { useState, useEffect } from "react";

export const useDarkMode = () => {
    const [isDarkMode, setDarkMode] = useState<boolean>(false);

    const handleDarkModeChange = () => {
        setDarkMode(!isDarkMode);
        localStorage.setItem("isDarkMode", JSON.stringify(!isDarkMode));
    };
    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add("dark");
            return;
        }
        root.classList.remove("dark");
    }, [isDarkMode]);

    useEffect(() => {
        const isDarkMode = localStorage.getItem("isDarkMode") as string;
        setDarkMode(JSON.parse(isDarkMode));
    }, []);

    return { isDarkMode, handleDarkModeChange };
};
