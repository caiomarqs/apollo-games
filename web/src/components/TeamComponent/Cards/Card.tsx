import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { TeamState, deleteTeamMember } from '../../../actions'
import { Badges } from './Badges'
import { StoreState } from '../../../reducers'


interface CardProps {
    profile: TeamState
    isInDashboard: boolean
    deleteTeamMember(member: TeamState): void
}

class _Card extends React.Component<CardProps>{

    onDeleteClicked = (member: TeamState) => {
        deleteTeamMember(member)
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


    isInDashBord = (status = false, userObject: TeamState) => {
        if (status === true) {
            return (
                <div className="optionsButton">
                    <Link to={`/backend/dashboard/team/update/member/${userObject._id}/${userObject.team}`} className="badge" >U</Link>
                    <div onClick={() => this.onDeleteClicked(userObject)}>D</div>
                </div>
            )
        }
    }

    render() {

        const { profile, isInDashboard } = this.props
        const { name, desc, contacts, img } = profile

        return (
            <li key={desc + name} className="profile-card">
                {this.compileProfileImage(img)}
                <div className="profile-info">
                    <h6>{name}</h6>
                    {this.isInDashBord(isInDashboard, this.props.profile)}
                    <p className="profile-desc">{desc.valueOf()}</p>
                    {contacts !== undefined ? <Badges contacts={contacts} /> : <></>}
                </div>
            </li>
        )
    }
}

const mapStateToProps = (state: StoreState) => {
    return { teams: state.teams }
}

export const Card = connect(mapStateToProps, { deleteTeamMember })(_Card)
