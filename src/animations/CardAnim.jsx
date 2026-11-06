import React from 'react'
import './CardAnim.css'

import { motion } from "motion/react";



const CardAnim = ({ children, delay = 0, startX = 0, startY = 0 }) => {
    return (
        <motion.div
            className="floating-card"
            
            initial={{
                x: startX,
                y: startY,
                opacity: 0,
            }}

            animate={{
                x: [startX, startX + 250],
                y: [startY, startY - 80],
                opacity: [0, 0.8, 0.8, 0],
            }}

            transition={{
                duration: 8,
                delay: delay,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                times: [0, 0.15, 0.8, 1],
            }}
        >
            {children}
        </motion.div>
    )
}

export default CardAnim