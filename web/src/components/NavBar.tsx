import React from 'react';

type props = {
    overEmit?: boolean
}

const NavBar = (props: props) => {
    return (
        <>
            <div className="navbar navbar-dark custom-nav">
                <div className="container">
                    <a className="custom-brand" href="/">
                        <img src={require('../assets/brand/apollo_logo_ext_white.svg')} alt="Logo Apollo" />
                    </a>
                    <div id="hambuger-menu" className="hambuger-menu">
                        <span />
                        <span />
                        <span />
                    </div>
                    <ul id="items-container" className="items-container">
                        <li className="nav-item btn-font">
                            <a className="nav-link" href="#about">sobre</a>
                        </li>
                        <li className="nav-item btn-font">
                            <a className="nav-link" href="#games">games</a>
                        </li>
                        <li className="nav-item btn-font">
                            <a className="nav-link" href="#team">time</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar