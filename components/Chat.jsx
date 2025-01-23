"use client"
import { useEffect } from "react";

// Component for Intelliticks chat widget
const Chat = () => {
  useEffect(() => {
    // Create a new script element
    const script = document.createElement("script");
    script.src = "https://path-to-intelliticks-widget.js"; // Replace with the actual script URL
    script.async = true;
    script.onload = () => {
      console.log("Intelliticks chat widget loaded");
    };

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Chat;
