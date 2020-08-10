import React from 'react'
import { LocalesButtons } from './LocalesButtons'

const OverMenu = () => {
    return (
        <div id="over-menu">
            <div id="close-over" className="close-over">
                <span className="close-x-45"></span>
                <span className="close-x-135"></span>
            </div>
            <ul id="items-over" className="items-over">
                <li className="nav-item btn-font li-over">
                    <a className="nav-link" href="#about">about</a>
                </li>
                <li className="nav-item btn-font li-over">
                    <a className="nav-link" href="#games">games</a>
                </li>
                <li className="nav-item btn-font li-over">
                    <a className="nav-link" href="#team">time</a>
                </li>
                <li className="nav-item">
                    <LocalesButtons />
                </li>
            </ul>
        </div>
    )
}

export default OverMenu;