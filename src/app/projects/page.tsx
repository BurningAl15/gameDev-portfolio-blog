// src/app/projects/page.tsx
"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsPage() {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    return (
        <div style={{ paddingBottom: '4rem' }}>
            <h1>Projects</h1>
            <div style={{ display: "grid", gap: "20px" }}>
                {projectsData.map((project) => {
                    const isHovered = hoveredProject === project.id;
                    const displayImage = isHovered && project.images.length > 0 && project.images[1] ? project.images[1] : project.images[0];

                    return (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02 }}
                            style={{ border: "1px solid #ccc", padding: "10px", cursor: "pointer" }}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <Link href={`/projects/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ width: "300px", height: "200px", overflow: "hidden" }}>
                                    <motion.img
                                        src={displayImage}
                                        alt={project.title}
                                        style={{ width: "100%", height: "auto" }}
                                        initial={{ scale: 1 }}
                                        animate={{ scale: isHovered ? 1.05 : 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <p>Platforms: {project.platforms.join(", ")}</p>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}