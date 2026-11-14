import React from 'react'
import './Inicio.css'

import emailjs from '@emailjs/browser';
import { useState } from "react";

import AviaoImg from '../imgs/Aviao.png'
import BtnWhats from '../animations/BtnWhats';
import BarraProgreso from '../animations/BarraProgreso';
import CardAnim from '../animations/CardAnim';


const Inicio = () => {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });

    const [enviando, setEnviando] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (
            !formData.nome.trim() ||
            !formData.email.trim() ||
            !formData.mensagem.trim()
        ) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        setEnviando(true);

        try {
            await emailjs.send(
                'service_muh4fe8',
                'template_3lg6tye',
                {
                    name: formData.nome,
                    email: formData.email,
                    message: formData.mensagem
                },
                'hmEx8dsPJOBGUxCmE'
            );

            alert('Mensagem enviada com sucesso!');

            setFormData({
            nome: '',
            email: '',
            mensagem: ''
            });

        } catch (error) {
            console.error('Erro ao enviar:', error);
            alert('Não foi possível enviar sua mensagem.');

        } finally {
            setEnviando(false);
        }

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
                    name="nome"
                    type="text"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Digite seu nome"
                    required
                    />
                </div>
                <div className='campoDePreechimento'>
                    <label>E-mail</label>
                    <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Digite seu e-mail"
                    required
                    />
                </div>
                <div className="campoTxt">
                    <label>Mensagem</label>
                    <textarea
                        name="mensagem"
                        placeholder="Digite sua mensagem..."
                        rows="5"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <button type="submit" id='btnForm' disabled={enviando}>
                    {enviando ? 'Enviando...' : 'Enviar mensagem'}
                </button>
            </form>
        </div>
    )
}

export default Inicio