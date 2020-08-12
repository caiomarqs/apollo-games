import React from 'react';
import { Link } from 'react-router-dom';
import { TeamState } from '../../actions';

export interface contacts {
  linkedin?: string;
  soundcloud?: string;
  site?: string;
  git?: string;
  twitter?: string;
  artstation?: string;
  instagram?: string;
}

enum desc {
  CODE_LEAD = 'Code Lead',
  DESENVOLVEDOR = 'Desenvolvedor',
  ART_LEAD = 'Art Lead',
  ARTISTA = 'Artista',
  SOUND_LEAD = 'Sound Lead',
  SOUND_DESIGNER = 'Sound Designer',
  HEAD_TEAM = 'Head Team',
  D_LEAD = '3D Lead',
  D_MODELER = '3D Modeler',
  GAMER_DESIGNER = 'Game Designer',
}

export interface profile {
  team: string;
  _id?: string;
  name: string;
  img?: string;
  desc: desc | string;
  contacts?: contacts;
}

const compileProfileImage = (img: string | undefined) => {
  let defaultImg = (
    <div
      className="img-container"
      style={{
        backgroundImage: "url('/uploads/fb91a1e8a763-principal_bg.jpeg')",
      }}
    />
  );

  if (img !== 'null' && img) {
    defaultImg = (
      <div
        className="img-container"
        style={{ backgroundImage: `url(/uploads/${img})` }}
      />
    );
  }

  return defaultImg;
};

const compileBadges = (contacts: contacts | any) => {
  let template: JSX.Element[] | undefined;

  if (contacts) {
    template = Object.keys(contacts).map((key) => {
      return (
        <a
          key={key + 'a'}
          href={`${contacts[key]}`}
          target="_blank"
          className="badge"
          rel="noopener noreferrer"
        >
          {key}
        </a>
      );
    });
  }

  return <div className="badges-container noselect">{template}</div>;
};
interface CardListProps {
  profiles?: Array<profile> | undefined;
  isInDashboard?: boolean;
  deleteTeamMember(member: TeamState): void;
}

const CardList = (props: CardListProps) => {
  const { profiles, isInDashboard } = props;
  let list: JSX.Element[] | undefined;

  const onDeleteClicked = (member: TeamState) => {
    props.deleteTeamMember(member);
  };

  if (profiles) {
    // console.log(profiles);
    list = profiles.map(({ name, desc, contacts, img, _id, team }) => {
      return (
        <li key={desc + name} className="profile-card">
          {compileProfileImage(img)}
          <div className="profile-info">
            <h6>{name}</h6>
            {isInDashboard ? (
              <>
                <Link
                  to={`/backend/dashboard/team/update/member/${_id}/${team}`}
                  className="badge"
                >
                  Update
                </Link>
                <button
                  onClick={() =>
                    onDeleteClicked({ _id, team, desc, name, img })
                  }
                  className="badge"
                >
                  Delete
                </button>
              </>
            ) : null}
            <p className="profile-desc">{desc.valueOf()}</p>
            {contacts === undefined ? '' : compileBadges(contacts)}
          </div>
        </li>
      );
    });
  }

  return <>{list}</>;
};

export default CardList;
