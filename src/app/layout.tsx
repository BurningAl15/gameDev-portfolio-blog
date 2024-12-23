"use client"
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/themes';
import { GlobalStyles } from '@/styles/globalStyles';
import "@/styles/globals.css"; // Cambiado para importar Tailwind CSS
import { metadata } from '@/data/metadata';
import { LocaleProvider } from "@/context/LocaleContext";


function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <html lang="en">
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <body>
          <LocaleProvider>
            <Header toggleTheme={toggleTheme} />
            <main className="p-4 md:p-8">
              {children}
            </main>
            <Footer />
          </LocaleProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}

export default appWithTranslation(RootLayout);
