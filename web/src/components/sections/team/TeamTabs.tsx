import React from 'react'
import { tabsProps } from './index'


type props = {
    tabsProps: Array<tabsProps>
}

const TeamTabs = (props: props) => {

    let tabs: JSX.Element[] | undefined

    if (props.tabsProps) {

        //Vefify first item
        let first = true

        tabs = props.tabsProps.map(tabProp => {
            
            //first item true -> active
            const active = first === true ? 'active' : ''

            return (
                <>
                    <li className="nav-item" role="presentation">
                        <a className={`nav-link btn-font ${active}`}
                            id={`${tabProp.idTarget}-tab`}
                            data-toggle="tab"
                            href={`#${tabProp.idTarget}`}
                            role="tab"
                            aria-controls={tabProp.idTarget} aria-selected="true"
                        >
                            {tabProp.name}
                        </a>
                    </li>
                    {first = false}
                </>
            )
        })
    }

    return (
        <ul className="nav nav-tabs noselect" id="myTab" role="tablist">
            <h2>Time</h2>
            {tabs}
        </ul>
    )

}

export default TeamTabs