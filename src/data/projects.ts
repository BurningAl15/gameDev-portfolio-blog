import { Project } from "@/types/projects";

export const projectsData: Project[] = [
    {
        id: "1",
        title: "360 video",
        description: "Explore architectural designs in VR.",
        platforms: ["VR"],
        state: "Prototype",
        unityBuildPath: "/unity-builds/360video",
        images: []
    },
    {
        id: "2",
        title: "Chocolate Way",
        description: "A puzzle game deployed as a WebGL build.",
        platforms: ["WebGL"],
        state: "Prototype",
        unityBuildPath: "/unity-builds/chocolateWay",
        images: []
    },
    {
        id: "3",
        title: "Sliding Game",
        description: "A puzzle game deployed as a WebGL build.",
        platforms: ["WebGL"],
        state: "Prototype",
        unityBuildPath: "/unity-builds/slidingGame",
        images: []
    },
    {
        id: "4",
        title: "Mobile Adventure",
        description: "Adventure game for Android and iOS.",
        platforms: ["Android", "iOS"],
        state: "Deployed",
        url: "https://play.google.com/store/apps/details?id=com.example.myapp",
        images: []
    }
];