import React from 'react'

const PrincipalSection = () => {
    return (
        <>
            <div id="principal">
                <div className="container noselect">
                    <img src={require('../../../assets/brand/apollo_logo_white.svg')} className="brand-principal" alt="Apollo Logo" />
                    <h4>O studio de games mais intrépido do mundo!</h4>
                    <p>Há duas coisas infinitas: o Universo e a nossa vontade de fazer jogos.</p>
                </div>
            </div>
        </>
    )
}

export default PrincipalSection