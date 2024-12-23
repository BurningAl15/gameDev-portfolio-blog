import { useState } from "react";

export const useLocale = () => {
    const [locale, setLocale] = useState("es");

    const toggleLocale = () => {
        setLocale(locale === "es" ? "en" : "es");
    };

    return { locale, toggleLocale };
};
