import React from 'react'
import Principal from './principal'
import Waves from './waves'
import About from './about'
import Games from './games'
import Team from './team/index'

const Sections = () => {
    return (
        <>
            <Principal />
            <Waves
                bg="bg-black-200"
            />
            <About />
            <Waves
                inverted={true}
                bg="bg-black-200"
            />
            <Games />
            <Waves />
            <Team />
        </>
    )
}

export default Sections