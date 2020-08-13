import React from 'react'
import { TeamTabs } from '../../TeamComponent'

const TeamSection = () => {
  return (
    <>
      <div id="team">
        <div className="container">
          <TeamTabs isInDashboard={false} />
        </div>
      </div>
    </>
  )
}

export default TeamSection
