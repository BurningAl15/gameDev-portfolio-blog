import React, { createContext, useContext, useState, ReactNode } from "react";

interface LocaleContextProps {
    locale: string;
    toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
    const [locale, setLocale] = useState("es");

    const toggleLocale = () => {
        setLocale(locale === "es" ? "en" : "es");
    };

    return (
        <LocaleContext.Provider value={{ locale, toggleLocale }}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLocale = () => {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error("useLocale must be used within a LocaleProvider");
    }
    return context;
};
