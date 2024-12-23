// Footer can be a server component if it doesn't need animation
import React from "react";

export default function Footer() {
    return (
        <footer style={{
            marginTop: '2rem',
            textAlign: 'center',
            position: 'fixed',
            bottom: 0,
            width: '100%',
        }}>
            <p>© 2024 Aldhair Vera Camacho</p>
        </footer>
    );
}