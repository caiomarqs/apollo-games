import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { TeamState, deleteTeamMember } from '../../../actions'
import { Badges } from './Badges'
import { Gabage, Pencil } from '../../Icons'


interface CardProps {
    profile: TeamState
    isInDashboard: boolean
    deleteTeamMember(member: TeamState): void;
}

class _Card extends React.Component<CardProps>{

    onDeleteClicked = (member: TeamState) => {
        this.props.deleteTeamMember(member)
    }

    compileProfileImage = (img: string | undefined) => {

        if (img !== 'null' && img) {
            return (
                <div className="img-container" style={{ backgroundImage: `url(/uploads/${img})` }} />
            )
        }

        return (
            <div className="img-container" style={{ backgroundImage: "url('/uploads/fb91a1e8a763-principal_bg.jpeg')" }} />
        )
    }


    isInDashBord = (status = false, profile: TeamState) => {
        
        if (status === true) {
            return (
                <div className="optionsButton">
                    <Link to={`/backend/dashboard/team/update/member/${profile._id}/${profile.team}`} >
                        <Pencil fill="#ABABAB" />
                    </Link>
                    <div onClick={() => this.onDeleteClicked(profile)}>
                        <Gabage fill="#ABABAB" />
                    </div>
                </div>
            )
        }
    }

    render() {

        const { profile, isInDashboard } = this.props
        const { name, desc, contacts, img } = profile

        return (
            <li key={profile.name} className="card-container">
                {this.isInDashBord(isInDashboard, profile)}
                <div className="profile-card">
                    {this.compileProfileImage(img)}
                    <div className="profile-info">
                        <h6>{name}</h6>
                        <p className="profile-desc">{desc.valueOf()}</p>
                        {contacts !== undefined ? <Badges contacts={contacts} /> : <></>}
                    </div>
                </div>
            </li>

        )
    }
}

export const Card = connect(null, { deleteTeamMember })(_Card)
