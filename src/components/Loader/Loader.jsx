import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import './loader.css';

export const Loader = () => {
    const [lines, setLines] = useState([1, 2, 3, 4, 5, 6]);
    const [activeLineIndex, setActiveLineIndex] = useState(0);
    const isLightTheme = useSelector((state) => state.theme.isLightTheme);
    const styleDiv = isLightTheme ? "loader-line" : "loader-line_black";

    const animationElement = {
        hidden: {
            y: -50,
            opacity: 0,
        },
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 2, delay: custom * 0.3 },
        }),
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const newLines = lines.map(() => {
                const lineStyles = {
                    width: "8px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "#000",
                };

                if (window.innerWidth >= 1440) {
                    lineStyles.width = "16px";
                    lineStyles.height = "54px";
                }

                return lineStyles;
            });

            newLines.forEach((line, index) => {
                if (index === activeLineIndex) {
                    line.className = 'loader-line_active';
                } else {
                    line.className = styleDiv;
                }
            });

            setActiveLineIndex((prevIndex) =>
                prevIndex < lines.length - 1 ? prevIndex + 1 : 0
            );

            setLines(newLines);
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, [lines, activeLineIndex]);

    return (
        <motion.div custom={1}
            variants={animationElement} className="loader-container">
            <div className="loader">
                {lines.map((line, index) => (
                    <div
                        className={`${styleDiv} ${line.className || ''}`}
                        key={index}
                    ></div>
                ))}
            </div>
        </motion.div>
    );
}

