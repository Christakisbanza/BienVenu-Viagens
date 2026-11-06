import React from 'react'
import './Inicio.css'
import { useState } from "react";

import AviaoImg from '../imgs/Aviao.png'
import BtnWhats from '../animations/BtnWhats';
import BarraProgreso from '../animations/BarraProgreso';



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
            <div id='imgAviao'>
                <img src={AviaoImg} alt="imagem de avião" />
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
                    <label>Email</label>
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu email"
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