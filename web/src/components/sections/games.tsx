import React from 'react'

const Games = () => {
    return (
        <>
            <div id="games">
                <div className="container">
                    <div className="noselect games-title">
                        <h2>Nossos Jogos</h2>
                        {/* <!-- <p className="sub-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> --> */}
                    </div>
                    <div className="games-cards noselect">
                        <div className="card">
                            <h6>Aurora Dawn</h6>
                            <p className="sub-regular">Em breve</p>
                        </div>
                        <div className="card">
                            <h6>INTZ Manager</h6>
                            <p className="sub-regular">Em breve</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Games