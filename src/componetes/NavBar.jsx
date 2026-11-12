import React from 'react'
import './NavBar.css'

import { Plane, PlaneTakeoff, MapPin, CalendarDays,Luggage } from 'lucide-react'
import { motion, useScroll } from 'motion/react'

const NavBar = () => {

    const { scrollYProgress } = useScroll();


    return (
        <>
            <div id='navBarContainer'>
                <div id='logoNavBar'>
                    <PlaneTakeoff/>
                    <Luggage />
                    <h1>JeanneTravel</h1>
                </div>
                <ul>
                    <li>
                        <a href="#containerInicio">Início</a>
                    </li>

                    <li>
                        <a href="#containerSobre">Sobre</a>
                    </li>

                    <li>
                        <a href="#servicos">Serviços</a>
                    </li>
                </ul>
                <div>
                    <a href="https://wa.me/5541995980859?text=Olá!%20Gostaria%20de%20mais%20informações." target="_blank">
                        <button id='btnNavBar'> Agende sua viagem</button>
                    </a>
                </div>
            </div>
        
        </>
    

    )
}

export default NavBar