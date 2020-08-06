import React from 'react';

const FooterBar = () => {
    return (
        <>
            <div className="footer">
                <div className="container noselect">
                    <div className="footer-items row ">
                        <ul className="nav flex-column col">
                            <li className="footer-title">
                                <span>Apollo</span>
                            </li>
                            <li className="nav-item">
                                <a className="btn-font footer-link" href="/#about">sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn-font footer-link" href="/#games">games</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn-font footer-link" href="/#team">time</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn-font footer-link" href="/contact">contato</a>
                            </li>
                        </ul>
                        <ul className="nav flex-column col">
                            <li className="footer-title">
                                <span>Games</span>
                            </li>
                            <li className="nav-item">
                                <a className="btn-font footer-link" href="/">Aurora Dawn</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn-font footer-link" href="/">INTZ Manager</a>
                            </li>
                        </ul>
                        <ul className="nav flex-column col">
                            <li className="footer-title">
                                <span>Social</span>
                            </li>
                            <li className="nav-item">
                                <a className="btn-font footer-link" href="https://twitter.com/ApolloGamesLab"
                                    target="_blank" rel="noopener noreferrer">twiter</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn-font footer-link" href="https://steamcommunity.com/groups/forcaintrepida"
                                    target="_blank" rel="noopener noreferrer" >steam</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn-font footer-link" href="https://www.instagram.com/apollogameslab/"
                                    target="_blank" rel="noopener noreferrer">instagram</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn-font footer-link" href="https://www.youtube.com/channel/UCyD-mgJbOpFaHLeSeRSMtQQ"
                                    target="_blank" rel="noopener noreferrer">youtube</a>
                            </li>
                        </ul>
                    </div>
                    <div className="hair-line"></div>
                    <div className="footer-brand row">
                        <span className="caption-font col-md rights">© 2020 Apollo Games Lab - Todos os direitos reservados</span>
                        <div className="col-md footer-logo">
                            <a href="/">
                                <img src={require('../assets/brand/apollo_logo_ext_white.svg')} alt="" />
                            </a>
                        </div>
                        <div className="dev col-md">
                            <span className="dev-title">Desenvolvido por</span>
                            <a className="caption-font" href="https://github.com/caiomarqs" target="_blank" rel="noopener noreferrer">@caiomarqs</a>
                            <a className="caption-font" href="https://github.com/baxhen" target="_blank" rel="noopener noreferrer">@baxhen</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default FooterBar