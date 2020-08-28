import React from 'react'
import { FormattedMessage } from 'react-intl'

const GamesSection = () => {
    return (
        <>
            <div id="games">
                <div className="container">
                    <div className="noselect games-title">
                        <h2><FormattedMessage id="games.titulo"/></h2>
                    </div>
                    <div className="games-cards noselect">
                        <div className="card">
                            <h6>Aurora Dawn</h6>
                            <p className="sub-regular"><FormattedMessage id="games.breve"/></p>
                        </div>
                        <div className="card">
                            <h6>INTZ Manager</h6>
                            <p className="sub-regular"><FormattedMessage id="games.breve"/></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GamesSection