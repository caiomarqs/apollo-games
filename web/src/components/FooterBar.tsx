import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export const FooterBar = () => {
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
                                <a className="btn-font footer-link" href="/#about" >
                                    <FormattedMessage id="footer.sobre" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="btn-font footer-link" href="/#games" >
                                    <FormattedMessage id="footer.games" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="btn-font footer-link" href="/#team" >
                                    <FormattedMessage id="footer.time" />
                                </a>
                            </li>
                            <li className="<nav-item">
                                <Link to="/contact" className="btn-font footer-link" replace>
                                    <FormattedMessage id="footer.contato" />
                                </Link>
                            </li>
                        </ul>
                        <ul className="nav flex-column col">
                            <li className="footer-title">
                                <span><FormattedMessage id='footer.games'/></span>
                            </li>
                            <li className="nav-item">
                                <a className="btn-font footer-link" href="/#games">Aurora Dawn</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn-font footer-link" href="/#games">INTZ Manager</a>
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
                                <a className="btn-font footer-link" href="https://www.youtube.com/channel/UCLN9FIqyuuGweIFbz2NvdRQ"
                                    target="_blank" rel="noopener noreferrer">youtube</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn-font footer-link" href="https://www.twitch.tv/apollogameslab"
                                    target="_blank" rel="noopener noreferrer">twitch</a>
                            </li>
                        </ul>
                    </div>
                    <div className="hair-line"></div>
                    <div className="footer-brand row">
                        <span className="caption-font col-md rights"><FormattedMessage id="footer.direitos"/></span>
                        <div className="col-md footer-logo">
                            <a href="/">
                                <img src={require('../assets/brand/apollo_logo_ext_white.svg')} alt="" />
                            </a>
                        </div>
                        <div className="dev col-md">
                            <span className="dev-title"><FormattedMessage id="footer.develop"/></span>
                            <a className="caption-font" href="https://github.com/caiomarqs" target="_blank" rel="noopener noreferrer">@caiomarqs</a>
                            <a className="caption-font" href="https://github.com/baxhen" target="_blank" rel="noopener noreferrer">@baxhen</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}