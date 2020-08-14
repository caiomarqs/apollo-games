import React from 'react'
import { connect } from 'react-redux'

import { handlerOverMenu } from '../../actions'
import { StoreState } from '../../reducers'

interface HamburgerMenuProps {
    handlerOverMenu: typeof handlerOverMenu,
    openMenu: boolean
}

class _HambugerMenu extends React.Component<HamburgerMenuProps> {

    handlerMenu = () => {
        this.props.handlerOverMenu(!this.props.openMenu)
    }

    render() {
        return (
            <div id="hambuger-menu" className="hambuger-menu" onClick={() => this.handlerMenu()}>
                <span />
                <span />
                <span />
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState) => {
    return { openMenu: state.overMenu.openMenu };
};


export const HambugerMenu = connect(mapStateToProps, { handlerOverMenu })(_HambugerMenu)