// components/BlockInTextCard.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }) => {
    const [exampleIndex, setExampleIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setExampleIndex((prev) => (prev + 1) % examples.length);
        }, SWAP_DELAY_IN_MS);
        return () => clearInterval(intervalId);
    }, [examples.length]);

    return (
        <p className="mb-2 font-weight-light small">
            <span className="ml-2">
                {examples[exampleIndex].split("").map((l, i) => (
                    <motion.span
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{
                            delay: FADE_DELAY,
                            duration: MAIN_FADE_DURATION,
                            ease: "easeInOut",
                        }}
                        key={`${exampleIndex}-${i}`}
                        className="position-relative"
                    >
                        <motion.span
                        style={{fontSize: "20px", fontWeight: "400"}}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: i * LETTER_DELAY,
                                duration: 0,
                            }}
                        >
                            {l}
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                                delay: i * LETTER_DELAY,
                                times: [0, 0.1, 1],
                                duration: BOX_FADE_DURATION,
                                ease: "easeInOut",
                            }}
                            className="position-absolute bg-dark"
                            style={{ bottom: "3px", left: "1px", right: "0", top: "3px" }}
                        />
                    </motion.span>
                ))}
            </span>
        </p>
    );
};

const BlockInTextCard = ({ examples }) => {
    return (
        <div>
            <Typewrite examples={examples} />
        </div>
    );
};

export default BlockInTextCard;
