import React from "react";

export default function YouTubePage() {
    return (
        <div>
            <h1>My YouTube Channel</h1>
            <p>Check out my latest videos and tutorials!</p>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
}