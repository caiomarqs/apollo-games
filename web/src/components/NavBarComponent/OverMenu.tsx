import React from 'react'

import { MenuItems } from './MenuItems'

const OverMenu = () => {
    return (
        <div id="over-menu">
            <div id="close-over" className="close-over">
                <span className="close-x-45"></span>
                <span className="close-x-135"></span>
            </div>
            <MenuItems id='items-over' className='items-over' isOver={true} />
        </div>
    )
}

export default OverMenu;