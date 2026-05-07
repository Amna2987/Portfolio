'use client'
import React, { useState } from "react";

export default function ContactBtn() {
  const [hover, setHover] = useState(false);

  const styles = {
    button: {
      padding: "10px 40px",
      borderRadius: "999px",
      border: "1px solid #c9f31d",
      background: "#0a0a0a",
      color: hover ? "#c9f31d" : "#ffffff",
      fontSize: "14px",
      letterSpacing: "0.025em",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: hover
        ? "0 0 6px #c9f31d, 0 0 20px rgba(201,243,29,0.4)"
        : "none",
      transform: hover ? "scale(1.03)" : "scale(1)",
    },
  };

  return (
    <button
      style={styles.button}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Contact Me
    </button>
  );
}