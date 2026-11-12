import './Sobre.css'
import { motion } from 'motion/react'

import PassaporteImg from '../imgs/PassaporteImg.png'
import MalaImg from '../imgs/MalaeGloboImg.png'

const Sobre = () => {
    return (
        <div id='containerSobre'>
            <div id='imgsSobre'>
                <img src={PassaporteImg} alt="" />
            </div>
            <div id='imgs2Sobre'>
                <img src={MalaImg} alt="" />
            </div>
            <motion.div
                className="sobre-texto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1>Sobre nós</h1>

                <h2>
                    Sua próxima aventura começa aqui.
                </h2>

                <p className='txt'>A JeanneTravel nasceu em 2026 com um propósito: tornar o mundo mais acessível e ajudar pessoas a transformarem seus planos de viagem em experiências inesquecíveis.</p>

                <p className='txt'>Atuamos oferecendo soluções completas para quem deseja explorar novos destinos, seja por lazer, estudos ou novas oportunidades. Trabalhamos com compra de passagens aéreas, pacotes turísticos, seguros de viagem, intercâmbios e assessoria para concessão de vistos, reunindo em um só lugar tudo o que você precisa para planejar sua próxima jornada.</p>

                <p className='txt'>Acreditamos que cada viagem carrega uma história, um sonho e uma oportunidade de descobrir algo novo. Por isso, nosso compromisso vai além de oferecer serviços: queremos proporcionar tranquilidade, segurança e suporte em cada etapa do caminho.</p>

                <h2>
                    Seu próximo destino começa com a gente. Vamos juntos descobrir o mundo?
                </h2>
            </motion.div>
        </div>
    )
}

export default Sobre