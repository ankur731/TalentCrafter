import React from 'react'
import "./Profile.css"
import "./ProfileSAvedJobs.css"
import SideBox from '../job/skeleton/SideBox'

function ProfileSavedJobs() {
  return (
    <div className="saved-jobs-div mt-3">
    <h5 className="mb-3">Saved Jobs</h5>

   <SideBox />
    <div className="applied-bar mt-3">
      <div className="applied-bar-top">
        <h6>UI/UX Designer</h6>
        <p>Unsave</p>
      </div>
      <div className="applied-bar-bottom mt-1">
        <p>Twitter Inc.</p>
        <p>23/11/2023</p>
      </div>
    </div>
  </div>
  )
}

export default ProfileSavedJobs
