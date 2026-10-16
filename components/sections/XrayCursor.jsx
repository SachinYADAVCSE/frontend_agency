import React, { useEffect, useRef } from "react";
import "./XrayCursor.css";

export default function XrayCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth following / slight magnetic lag
      currentX += (mouseX - currentX) * 0.16;
      currentY += (mouseY - currentY) * 0.16;

      cursor.style.transform = `
        translate3d(
          ${currentX}px,
          ${currentY}px,
          0
        ) translate(-50%, -50%)
      `;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animation = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animation);
    };
  }, []);

  return <div ref={cursorRef} className="xray-cursor" />;
}