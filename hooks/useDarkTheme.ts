import { useEffect, useState } from "react";

export default function useDarkTheme() {
    const [darkTheme, setDarkTheme] = useState(typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches);

    const themeChangeListener = () => {
        setDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }

    useEffect(() => {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', themeChangeListener);
        
        return () => {
            window.matchMedia("(prefers-color-scheme: dark)").removeEventListener('change', themeChangeListener);
        }
    }, []);

    return darkTheme;
}
