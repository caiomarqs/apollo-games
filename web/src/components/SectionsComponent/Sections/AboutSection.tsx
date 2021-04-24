import React from 'react'
import { FormattedMessage } from 'react-intl'

const AboutSection = () => {
    return (
        <>
            <div id="about">
                <div className="container">
                    <div className="noselect about-title">
                        <h2><FormattedMessage id="about.titulo" /></h2>
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
                            <p><FormattedMessage id="about.p" /></p>
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