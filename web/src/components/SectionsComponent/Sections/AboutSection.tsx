import React from 'react'

const AboutSection = () => {
    return (
        <>
            <div id="about">
                <div className="container">
                    <div className="noselect about-title">
                        <h2>Sobre o Lab</h2>
                        {/* <!-- <p className="sub-regular">Há duas coisas infinitas: o Universo e a nossa vontade de fazer jogos !</p> --> */}
                    </div>
                    <div className="device-container">
                        <div className="device-left">
                            <span className="analogic"></span>
                            <span className="four-btns"></span>
                        </div>
                        <div className="device-screen">
                            <div className="asci noselect">
                                <img src={require('../../../assets/contents/anim_apollo.gif')} alt="Appolo Gif Anmation" />
                            </div>
                            <p>
                                Olá ! Localizados em São Paulo, somos um time apaixonado e preparado para criar universos
                                fantásticos dentro de nossos jogos, nossa equipe de alta performance tem foco na qualidade
                                visual, questões técnicas e a diversão de nossos jogadores. Atualmente estamos criando projetos
                                para computadores e celulares, trabalhamos de modo independente e estamos em busca de parceiros
                                ou colaboração em nossa jornada.
                                Só temos uma pergunta em nossa mente: Qual será o futuro dos games?
                                A resposta: Nós!
                    </p>
                        </div>
                        <div className="device-right">
                            <span className="four-btns"></span>
                            <span className="analogic"></span>
                        </div>
                        <div className="device-painel">
                            <span className="game-arrow"></span>
                            <span className="game-btns"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection