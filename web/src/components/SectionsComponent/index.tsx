import React from 'react'
import PrincipalSection from './Sections/PrincipalSection'
import WaveSeparator from '../WaveSeparator'
import AboutSection from './Sections/AboutSection'
import GamesSection from './Sections/GamesSection'
import Team from './Sections/TeamSection'

const Sections = () => {
    return (
        <>
            <PrincipalSection />
            <WaveSeparator
                bg="bg-black-200"
            />
            <AboutSection />
            <WaveSeparator
                inverted={true}
                bg="bg-black-200"
            />
            <GamesSection />
            <WaveSeparator/>
            <Team />
        </>
    )
}

export default Sections