import React from 'react'
import "./Profile.css"
import "./ProfileApplications.css"
import SideBox from '../job/skeleton/SideBox'

function ProfileApplications() {
  return (
    <div className="application-div">
    <h5 className="mb-3">Applications</h5>
    
    <SideBox />
    <div className="applied-bar mt-3">
      <div className="applied-bar-top">
        <h6>UI/UX Designer</h6>
        <p>Applied</p>
      </div>
      <div className="applied-bar-bottom mt-1">
        <p>Twitter Inc.</p>
        <p>23/11/2023</p>
      </div>
    </div>
  </div>
  )
}

export default ProfileApplications
