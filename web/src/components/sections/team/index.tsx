import React from 'react'
import TeamTabs from './TeamTabs'
import TabsContents from './TabsContents'

export type tabsProps = {
    name: String
    idTarget: string
}

const tabConfig: Array<tabsProps> = [
    { name: 'dev', idTarget: 'develop' },
    { name: 'audio', idTarget: 'sound' },
    { name: 'produção', idTarget: 'prod' },
    { name: 'arte', idTarget: 'design' },
    { name: 'game design', idTarget: 'game' }
]


const Team = () => {
    return (
        <>
            <div id="team">
                <div className="container">
                    <TeamTabs
                        tabsProps={tabConfig}
                    />
                    <TabsContents 
                        contents={tabConfig}
                    />
                </div>
            </div>
        </>
    )
}

export default Team