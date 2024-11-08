
import { motion } from "framer-motion";

const LostWord = ({stagger, duration}) => {

    const lost = ["l", "o", "s", "t", " ", "o", "r"," ", "f","o","u","n","d","?"]
    const homepage = ["h", "o", "m", "e"]
    return (
        <>
            <motion.div

                initial="initial"
                whileHover="hovered"
                style={{ position: "relative", overflow: "hidden", lineHeight: "0.85" }}>
                <div>
                    {homepage.map((l, i) => {
                        return <motion.span
                            style={{ fontSize: "100px", display: "inline-block" }}
                            key={i}
                            transition={{
                                duration: duration,
                                ease: "easeInOut",
                                delay: stagger * i
                            }}
                            variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}>
                               {l === " " ? "\u00A0" : l}
                        </motion.span>
                    })}
                </div>
                <div style={{ position: "absolute", inset: 0 }}>
                    {homepage.map((l, i) => { 
                        return <motion.span
                            transition={{
                                duration: duration,
                                ease: "easeInOut",
                                delay: stagger * i
                            }}
                            style={{ fontSize: "100px", display: "inline-block" }}
                            variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}>
                              {l === " " ? "\u00A0" : l}
                        </motion.span>
                    })}
                </div>
            </motion.div>
        </>
    )
}

export default LostWord;