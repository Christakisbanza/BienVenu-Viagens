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
                    <PlaneTakeoff size={30}/>
                    <Luggage size={30}/>
                    <h1>BienVenu Travel&Tours</h1>
                </div>
                <ul>
                    <li>Inicio</li>
                    <li>Sobre</li>
                    <li>Serviços</li>
                </ul>
                <div>
                    <button id='btnNavBar'> Agende sua viagem</button>
                </div>
            </div>
        
        </>
    

    )
}

export default NavBar