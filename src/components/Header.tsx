"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useLocale } from "@/context/LocaleContext";

export default function Header({ toggleTheme }) {
    const { locale, toggleLocale } = useLocale();
    const [clientLocale, setClientLocale] = useState(locale);

    useEffect(() => {
        setClientLocale(locale);
    }, [locale]);

    return (
        <header className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white flex flex-col md:flex-row md:justify-between md:items-center shadow-lg">
            <h1 className="text-3xl font-extrabold tracking-tight">My Portfolio</h1>
            <button onClick={toggleTheme} className="mt-2 p-2 bg-yellow-500 text-black rounded md:mt-0 hover:bg-yellow-600 transition-colors duration-300">Toggle Theme</button>
            <button onClick={toggleLocale} className="mt-2 p-2 bg-yellow-500 text-black rounded md:mt-0 hover:bg-yellow-600 transition-colors duration-300">
                {clientLocale === "es" ? "Switch to English" : "Cambiar a Español"}
            </button>
            <nav className="mt-4 md:mt-0">
                <ul className="flex flex-col md:flex-row gap-4 list-none">
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <Link href="/">Home</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <Link href="/about">About</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <Link href="/projects">Projects</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <Link href="/blog">Blog</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <Link href="/youtube">YouTube</Link>
                    </motion.li>
                </ul>
            </nav>
        </header>
    );
}