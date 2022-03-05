import { useEffect, useState } from "react";

export default function useDeviceTheme() {
    const [theme, setTheme] = useState<'light' | 'dark'>(typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light');

    const themeChangeListener = () => {
        setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light');
    }

    useEffect(() => {
        window.matchMedia("(prefers-color-scheme: dark)").addListener(themeChangeListener);
        
        return () => {
            window.matchMedia("(prefers-color-scheme: dark)").removeListener(themeChangeListener);
        }
    }, []);

    return theme;
}
