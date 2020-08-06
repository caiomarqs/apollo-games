import React from 'react'
import { tabsProps } from './index'
import CardList from './CardsList'
import { teamsData } from './data'

const remap = (arg: string) => {
    switch (arg) {
        case 'develop':
            return 'develop'
        case 'sound':
            return 'sound'
        case 'prod':
            return 'prod'
        case 'art':
            return 'art'
        case 'game':
            return 'game'
        default:
            return 'develop'
    }
}

type props = {
    contents: Array<tabsProps>
}

const TabsContents = (props: props) => {

    let contents: JSX.Element[] | undefined

    if (props.contents) {

        //Vefify first item
        let first = true

        contents = props.contents.map(content => {
            //first item true -> active
            const active = first === true ? 'show active' : ''

            return (
                <>
                    <div className={`tab-pane fade ${active} profiles-container`} id={`${content.idTarget}`} role="tabpanel"
                        aria-labelledby={`${content.idTarget}-tab`} >
                        <ul id={`${content.idTarget}-tab`}>
                            <CardList
                                profiles={teamsData[remap(content.idTarget)]}
                            />
                        </ul>
                    </div>
                    {first = false}
                </>
            )
        })
    }

    return (
        <div className="tab-content" id="myTabContent">
            {contents}
        </div>
    )

}

export default TabsContents