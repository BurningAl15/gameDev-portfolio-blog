// src/components/UnityPlayer.tsx
"use client";

import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

interface UnityPlayerProps {
    buildPath: string;
}

export default function UnityPlayer({ buildPath }: UnityPlayerProps) {
    const is360Video = buildPath === "/unity-builds/360video";
    const baseName = is360Video ? "SubterraTestV2" : "Build";

    const { unityProvider, loadingProgression, unload, isLoaded } = useUnityContext({
        loaderUrl: `${buildPath}/Build/${baseName}.loader.js`,
        dataUrl: `${buildPath}/Build/${baseName}.data.unityweb`,
        frameworkUrl: `${buildPath}/Build/${baseName}.framework.js.unityweb`,
        codeUrl: `${buildPath}/Build/${baseName}.wasm.unityweb`,
    });

    const loadingPercentage = Math.round(loadingProgression * 100);

    useEffect(() => {
        // Cleanup function runs on component unmount
        return () => {
            unload()
                .then(() => console.log("Unity unloaded on unmount"))
                .catch((error) => console.error("Error unloading Unity:", error));
        };
    }, [unload]);

    function handleClickEnterFullscreen() {
        // If Unity provides its own fullscreen method, call it.
        // Otherwise, just request fullscreen on the document.
        document.documentElement.requestFullscreen();
    }

    function handleCloseGame() {
        unload()
            .then(() => console.log("Game closed (Unity unloaded)"))
            .catch((error) => console.error("Error closing game:", error));
    }

    return (
        <div style={{ width: 1280, height: 720 }}>
            {!isLoaded && <p>Loading Unity... {loadingPercentage}%</p>}
            <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%", borderRadius: "30px" }} />
            <button onClick={handleClickEnterFullscreen}>Enter Fullscreen</button>
            <button onClick={handleCloseGame}>Close Game</button>
        </div>
    );
}