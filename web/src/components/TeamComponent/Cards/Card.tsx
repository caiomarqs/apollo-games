import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { TeamState, deleteTeamMember } from '../../../actions';
import { Badges } from './Badges';
import { Gabage, Pencil } from '../../Icons';
import { FormattedMessage } from 'react-intl';

interface CardProps {
  profile: TeamState;
  isInDashboard: boolean;
  deleteTeamMember(member: TeamState): void;
}

class _Card extends React.Component<CardProps> {
  onDeleteClicked = (member: TeamState) => {
    this.props.deleteTeamMember(member);
  };

  compileProfileImage = (img: string | undefined) => {
    //firebasestorage.googleapis.com/v0/b/apollogameslab-f43c8.appspot.com/o/00584719dd0c-principal_bg.jpeg?alt=media
    const defaultImage = (new Image().src =
      'https://firebasestorage.googleapis.com/v0/b/apollogameslab-f43c8.appspot.com/o/00584719dd0c-principal_bg.jpeg?alt=media');
    const profileImage = (new Image().src = `https://firebasestorage.googleapis.com/v0/b/apollogameslab-f43c8.appspot.com/o/${img}?alt=media`);

    if (img !== 'null' && img) {
      return <img className="img-container" src={profileImage} alt={img}></img>;
    }

    return (
      <img className="img-container" src={defaultImage} alt="padrao"></img>
    );
  };

  isInDashBord = (status = false, profile: TeamState) => {
    if (status === true) {
      return (
        <div className="optionsButton">
          <Link
            to={`/backend/dashboard/team/update/member/${profile._id}/${profile.team}`}
          >
            <Pencil fill="#ABABAB" />
          </Link>
          <div onClick={() => this.onDeleteClicked(profile)}>
            <Gabage fill="#ABABAB" />
          </div>
        </div>
      );
    }
  };

  render() {
    const { profile, isInDashboard } = this.props;
    const { name, desc, contacts, img } = profile;

    return (
      <>
        <li key={profile.name} className="card-container">
          {this.isInDashBord(isInDashboard, profile)}
          <div className="profile-card">
            {this.compileProfileImage(img)}
            <div className="profile-info">
              <h6>{name}</h6>
              <p className="profile-desc">
                <FormattedMessage id={`${desc}`} />
              </p>
              {contacts !== undefined ? <Badges contacts={contacts} /> : <></>}
            </div>
          </div>
        </li>
      </>
    );
  }
}

export const Card = connect(null, { deleteTeamMember })(_Card);
