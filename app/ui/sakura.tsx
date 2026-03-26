"use client";

import { useEffect } from "react";

function createPetal() {
    const petal = document.createElement("div");
    petal.className = "sakura";

    const duration = Math.random() * 2.2 + 2;
    const size = Math.random() * 8 + 8;

    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.left = `${Math.random() * 150}vw`;
    petal.style.opacity = Math.random() * 0.5 + 0.5;
    petal.style.filter = `blur(${Math.random() * 1}px)`;

    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), (duration) * 1000);
}

export default function Sakura() {
    useEffect(() => {
        if (sessionStorage.getItem("sakuraShown")) return;

        const run = () => {
            for (let i = 0; i < 35; i++) {
                setTimeout(createPetal, i * 120);
            }
            sessionStorage.setItem("sakuraShown", "true");
        };

        if (document.readyState === "complete") {
            run();
        } else {
            window.addEventListener("load", run);
            return () => window.removeEventListener("load", run);
        }
    }, []);

    return null;
}