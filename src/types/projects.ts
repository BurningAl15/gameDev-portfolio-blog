export type Platform = "VR" | "WebGL" | "Android" | "iOS" | "macOS";
export type State = "Prototype" | "Deployed";

export interface Project {
    id: string;
    title: string;
    description: string;
    platforms: Platform[];
    state: State;
    url?: string;
    unityBuildPath?: string;
    images: string[];
}