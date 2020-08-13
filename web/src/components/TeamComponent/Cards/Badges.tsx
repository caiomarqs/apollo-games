import React from 'react'

import { Contacts } from '../../../actions'

interface BadgeProps {
    contacts: Contacts
}

export class Badges extends React.Component<BadgeProps>{
    renderBadges = (contacts: Contacts | undefined | any) => {
        if (contacts) {
            return Object.keys(contacts).map((key) => {
                return <a key={key + 'a'} href={`${contacts[key]}`} target="_blank" className="badge" rel="noopener noreferrer" >{key}</a>
            })
        }
        return <></>
    }

    render() {
        if(this.props.contacts){
            return <div className="badges-container noselect">{this.renderBadges(this.props.contacts)}</div>
        }
    }
}
