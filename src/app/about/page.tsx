"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAboutMeData } from "@/data/aboutMe";
import { useLocale } from "@/context/LocaleContext";

export default function AboutPage() {
    const { locale } = useLocale();
    const [clientLocale, setClientLocale] = useState(locale);

    useEffect(() => {
        setClientLocale(locale);
    }, [locale]);

    const aboutMeData = getAboutMeData(clientLocale);
    const { name, title, description, expertise, certifications, relevantJobs, skills } = aboutMeData;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-lg shadow-md"
        >

            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <h2 className="text-2xl font-semibold">{name}</h2>
            <h3 className="text-xl">{title}</h3>
            <section className="mt-6">
                <div>
                    {description.map((desc) => <p key={desc}>{desc}</p>)}
                </div>
            </section>

            <section className="mt-6">
                <h4 className="text-xl font-semibold">Expertise</h4>
                <ul className="list-disc list-inside ml-4">
                    {expertise.map((exp) => <li key={exp}>{exp}</li>)}
                </ul>
            </section>

            <section className="mt-6">
                <h4 className="text-xl font-semibold">Certifications</h4>
                <ul className="list-disc list-inside ml-4">
                    {certifications.map((cert) => <li key={cert}>{cert}</li>)}
                </ul>
            </section>

            <section className="mt-6">
                <h4 className="text-xl font-semibold">Relevant Jobs</h4>
                <ul className="list-disc list-inside ml-4">
                    {relevantJobs.map((job, index) => (
                        <li key={index}>{job.title} at {job.company} for {job.years} years</li>
                    ))}
                </ul>
            </section>

            <section className="mt-6">
                <h4 className="text-xl font-semibold">Skills</h4>
                <ul className="list-disc list-inside ml-4">
                    {skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
            </section>
        </motion.div>
    );
}