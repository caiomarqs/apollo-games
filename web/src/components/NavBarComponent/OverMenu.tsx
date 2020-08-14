import React from 'react'
import { connect } from 'react-redux'

import { MenuItems } from './MenuItems'
import { handlerOverMenu } from '../../actions'
import { StoreState } from '../../reducers'

interface OverMenuProps {
    handlerOverMenu: typeof handlerOverMenu,
    openMenu: boolean
}

class _OverMenu extends React.Component<OverMenuProps>{

    handlerMenu = () => {
        this.props.handlerOverMenu(!this.props.openMenu)
    }

    render() {

        let overMenuClass = ''
        let span45Class = 'close-x-45'
        let span135Class = 'close-x-135'

        if(this.props.openMenu === true){
            overMenuClass = 'colapse-over'
            span45Class = 'close-x-45 rotate-45'
            span135Class = 'close-x-135 rotate-135'
        }

        return (
            <div id="over-menu" className={overMenuClass}>
                <div id="close-over" className="close-over" onClick={() => this.handlerMenu()}>
                    <span className={span45Class} />
                    <span className={span135Class} />
                </div>
                <MenuItems id='items-over' className='items-over' isOver={true} />
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState) => {
    return { openMenu: state.overMenu.openMenu };
};

export const OverMenu = connect(mapStateToProps, { handlerOverMenu })(_OverMenu);