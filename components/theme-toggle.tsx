"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
    const [frontEnd, setFrontEnd] = useState(false);
    useEffect(() => {
        setFrontEnd(true);
    }, []);

    return frontEnd ? <ThemeToggleInternal /> : <></>;
};

export const ThemeToggleInternal = () => {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        if (!theme) {
            setTheme("light");
        }
    }, [theme]);

    const onClick = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <button
            className="bg-sky-600 hover:bg-sky-500 dark:bg-red-600 dark:hover:bg-red-500 text-white shadow p-2 rounded"
            onClick={onClick}
        >
            Toggle {theme ?? "light"}
        </button>
    );
};

export default ThemeToggle;
