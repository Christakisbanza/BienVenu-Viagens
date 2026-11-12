import React from 'react'
import './Servicos.css'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import {
    Plane,
    Palmtree,
    ShieldCheck,
    GraduationCap,
    FileCheck,
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Divide
} from 'lucide-react'

const servicos = [
    {
        id: 1,
        titulo: 'Passagens aéreas',
        descricao:
        'Encontre as melhores opções de passagens para chegar ao destino dos seus sonhos.',
        icon: Plane,
        numero: '01'
    },
    {
        id: 2,
        titulo: 'Turismo e viagens',
        descricao:
        'Descubra novos lugares, conheça culturas e viva experiências inesquecíveis.',
        icon: Palmtree,
        numero: '02'
    },
    {
        id: 3,
        titulo: 'Seguro viagem',
        descricao:
        'Viaje com mais tranquilidade contando com opções de proteção e assistência.',
        icon: ShieldCheck,
        numero: '03'
    },
    {
        id: 4,
        titulo: 'Intercâmbio',
        descricao:
        'Explore oportunidades de estudar no exterior e ampliar seus horizontes.',
        icon: GraduationCap,
        numero: '04'
    },
    {
        id: 5,
        titulo: 'Assessoria para vistos',
        descricao:
        'Conte com orientação e suporte durante as etapas de solicitação do seu visto.',
        icon: FileCheck,
        numero: '05'
    }
]




const Servicos = () => {
    const containerRef = useRef(null)
    const [indice, setIndice] = useState(0)
    const [larguraCard, setLarguraCard] = useState(0)
    const [quantidadeVisivel, setQuantidadeVisivel] = useState(3)

    const gap = 24

    // Identifica quantos cards cabem na tela
    useEffect(() => {
        const atualizarTela = () => {
            const largura = window.innerWidth

            if (largura <= 600) {
                setQuantidadeVisivel(1)
            } else if (largura <= 900) {
                setQuantidadeVisivel(2)
            } else {
                setQuantidadeVisivel(3)
            }
        }

        atualizarTela()

        window.addEventListener('resize', atualizarTela)

        return () => {
            window.removeEventListener('resize', atualizarTela)
        }
    }, [])

     // Calcula a largura de cada card
    useEffect(() => {
        const container = containerRef.current

        if (!container) return

        const atualizarLargura = () => {
            const largura = container.clientWidth
            const cardWidth =
                (largura - gap * (quantidadeVisivel - 1)) /
                quantidadeVisivel

            setLarguraCard(cardWidth)
        }

        atualizarLargura()

        const observer = new ResizeObserver(atualizarLargura)
        observer.observe(container)

        return () => observer.disconnect()
    }, [quantidadeVisivel])

    const maxIndice = servicos.length - quantidadeVisivel

    const proximo = () => {
        setIndice((atual) =>
            atual >= maxIndice ? 0 : atual + 1
        )
    }

    const anterior = () => {
        setIndice((atual) =>
            atual <= 0 ? maxIndice : atual - 1
        )
    }

    const irPara = (posicao) => {
        setIndice(posicao)
    }

    // Garante que o índice continue válido ao redimensionar
    useEffect(() => {
        setIndice((atual) => Math.min(atual, maxIndice))
    }, [maxIndice])

    return (
        <div id='servicos' className='servicos-section'>
            <div className="servicos-container">

                {/* Cabeçalho */}
                <div className="servicos-header">
                    <div className="servicos-titulo">
                        <span className="servicos-label">
                            O QUE OFERECEMOS
                        </span>

                        <h2>
                            Tudo para sua próxima <br />
                            <span>grande viagem.</span>
                        </h2>

                        <p>
                            Da primeira pesquisa até o seu destino,
                            estamos aqui para ajudar você em cada etapa
                            da sua jornada.
                        </p>
                    </div>

                    {/* Botões de navegação */}
                    <div className="servicos-controles">

                        <button
                            className="servicos-btn"
                            onClick={anterior}
                            aria-label="Serviço anterior"
                        >
                            <ArrowLeft size={22} />
                        </button>

                        <button
                            className="servicos-btn"
                            onClick={proximo}
                            aria-label="Próximo serviço"
                        >
                            <ArrowRight size={22} />
                        </button>

                    </div>
                </div>

                {/* Carrossel */}
                <div
                    className="servicos-viewport"
                    ref={containerRef}
                >

                    <motion.div
                        className="servicos-track"
                        animate={{
                        x: -(indice * (larguraCard + gap))
                        }}
                        transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 20
                        }}
                    >

                        {servicos.map((servico) => {

                            const Icone = servico.icon

                            return (
                                <article
                                    className="servico-card"
                                    key={servico.id}
                                    style={{
                                        width: larguraCard || '100%'
                                    }}
                                >

                                    <div className="servico-card-topo">

                                        <span className="servico-numero">
                                            {servico.numero}
                                        </span>

                                        <div className="servico-icon">
                                            <Icone size={30} strokeWidth={1.6} />
                                        </div>

                                    </div>

                                    <div className="servico-card-conteudo">

                                        <h3>{servico.titulo}</h3>

                                        <p>{servico.descricao}</p>

                                        <button
                                            className="servico-link"
                                            onClick={() =>
                                                window.open(
                                                'https://wa.me/5541995980859?text=Olá!%20Gostaria%20de%20mais%20informações.',
                                                '_blank'
                                                )
                                            }
                                        >
                                            Saiba mais
                                            <ArrowUpRight size={18} />
                                        </button>

                                    </div>

                                </article>
                            )
                        })}

                    </motion.div>

                </div>

                {/* Indicadores */}
                <div className="servicos-footer">

                    <div className="servicos-indicadores">

                        {Array.from(
                            { length: maxIndice + 1 },
                            (_, i) => (
                                <button
                                key={i}
                                className={`servico-indicador ${
                                    indice === i ? 'ativo' : ''
                                }`}
                                onClick={() => irPara(i)}
                                aria-label={`Ir para posição ${i + 1}`}
                                aria-current={indice === i ? 'true' : undefined}
                                />
                            )
                        )}

                    </div>

                    <span className="servicos-contagem">
                        {String(indice + 1).padStart(2, '0')}
                        {' / '}
                        {String(maxIndice + 1).padStart(2, '0')}
                    </span>

                </div>

            </div>
        </div>
    )
}

export default Servicos