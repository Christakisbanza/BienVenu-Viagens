import React from 'react'
import './BtnWhats.css'
import WhatsImg from '../imgs/WhatsApp_icon.png'
import { motion, useScroll, useSpring } from "motion/react";




const BtnWhats = () => {


    return (
        <div>
            <motion.a
                id='imgWhats'
                href="https://wa.me/5541995980859?text=Olá!%20Gostaria%20de%20mais%20informações."
                target="_blank"
                rel="noopener noreferrer"

                animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.05, 1],
                }}

                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}

                whileHover={{
                    scale: 1.2,
                    rotate: 10,
                }}

                whileTap={{
                    scale: 0.85,
                }}
            >
                <img src={WhatsImg} alt="Imagem do whatsapp" />
            </motion.a>
        </div>
    )
}

export default BtnWhats