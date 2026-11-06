import React from 'react'
import './BarraProgreso.css'

import { motion, useScroll, useSpring } from "motion/react";


const BarraProgreso = () => {

    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });


    return (
        <motion.div
            className="progress-bar"
            style={{ scaleX }}
        />
    )
}

export default BarraProgreso