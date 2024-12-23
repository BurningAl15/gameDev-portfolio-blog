// src/app/projects/[id]/page.tsx
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import UnityPlayer from "@/components/UnityPlayer";
import React from "react";
import Image from "next/image";

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
    const project = projectsData.find(p => p.id === params.id);
    if (!project) {
        notFound();
    }

    return (
        <div>
            <h1>{project?.title}</h1>
            <p>{project?.description}</p>
            <p>Platforms: {project?.platforms.join(", ")}</p>

            {project?.url && (
                <p>
                    <a href={project.url} target="_blank" rel="noreferrer">Open Project</a>
                </p>
            )}

            {/* If we have a unityBuildPath, show the UnityPlayer */}
            {project?.unityBuildPath && <UnityPlayer buildPath={project.unityBuildPath} />}

            {/* Show project images as a gallery or just the first image */}
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                {project?.images.map((img, idx) => (
                    <Image key={idx} src={img} alt={project.title} style={{ width: "200px", height: "auto" }} />
                ))}
            </div>
        </div>
    );
}