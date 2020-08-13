import React from 'react'
import _ from 'lodash'

import { history } from '../../history'
import { tabKey } from './index'

interface TeamHeaderProps {
    tabsKeys: tabKey[]
}

export class TeamHeader extends React.Component<TeamHeaderProps> {
    active = ''

    activeTeam = () => {
        this.active += 'active show'
    }

    onAddButtonClicked = () => {
        history.push('/backend/dashboard/team/add/member')
    }

    renderTabs = (tabsKeys: tabKey[]) => _.map(tabsKeys, ({ key, title }) => {
        const firstTab = key === tabsKeys[0].key ? 'active' : ''

        return (
            <li key={key} className="nav-item" role="presentation">
                <a key={key} className={`nav-link btn-font ${firstTab}`} id={`${key}-tab`} data-toggle="tab" href={`#${key}`} role="tab" aria-controls={key} aria-selected="true">
                    {title}
                </a>
            </li>
        )
    })


    render() {
        return (
            <ul className="nav nav-tabs noselect" id="myTab" role="tablist">
                <h2>Time</h2>
                {this.renderTabs(this.props.tabsKeys)}
            </ul>
        )
    }
}