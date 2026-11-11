import React from 'react'
import './Inicio.css'
import { useState } from "react";

import AviaoImg from '../imgs/Aviao.png'
import BtnWhats from '../animations/BtnWhats';
import BarraProgreso from '../animations/BarraProgreso';
import CardAnim from '../animations/CardAnim';


const Inicio = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    

    function handleSubmit(event) {
        event.preventDefault();

        if (!nome || !email) {
            alert("Preencha todos os campos!");
        return;
        }

        alert("Nome:" + nome);
        alert("Email:" + email);
        alert("Msg:" + msg);

        setNome("")
        setEmail("")
        setMsg("")
    }

    return (
        <div id='containerInicio'>
            <BarraProgreso/>
            <BtnWhats/>
            <div id='imgAviao' className="floating-section">
                <img src={AviaoImg} alt="imagem de avião" />
                <CardAnim startX={-100} startY={-150} delay={0}>
                    <h3>Passagens Aérias Para o Mundo Inteiro</h3>
                    <p>Experiências únicas. Garanta já o seu</p>
                </CardAnim>
                <CardAnim startX={-100} startY={0} delay={3}>
                    <h3>Guia de Turismo</h3>
                    <p>Entre em contato para mais informações </p>
                </CardAnim>
                <CardAnim startX={-100} startY={150} delay={6}>
                    <h3>A Procura de um Intercâmbio ?</h3>
                    <p>Preencha o formulário ao lado !</p>
                </CardAnim>
            </div>
            <form onSubmit={handleSubmit}>
                <h1>Preencha o formulário e em breve entraremos em contato</h1>
                <div className='campoDePreechimento'>
                    <label>Nome</label>
                    <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite seu nome"
                    />
                </div>
                <div className='campoDePreechimento'>
                    <label>E-mail</label>
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu e-mail"
                    />
                </div>
                <div className="campoTxt">
                    <label>Mensagem</label>
                    <textarea
                        placeholder="Digite sua mensagem..."
                        rows="5"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                    />
                </div>
                
                <button type="submit" id='btnForm'>
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default Inicio