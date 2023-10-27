import React from 'react'
import "./ProfileCard.css"
import { useNavigate } from 'react-router'

function ProfileCard() {
  const navigate = useNavigate();

  const sendToProfile = () => {
    navigate("/profile")
  }
  return (
    <div className='profile-card'>
          <img className='profile-img' src={require("../../../assets/person.jpg")} alt='dp'/>
          <div className='profile-card-middle'>
          <h4>Ankur Tiwari</h4>
          <h5>Junior UX Designer</h5>
          </div>
          <button onClick={sendToProfile} className='edit-profile-btn'>Edit Profile</button>
    </div>
  )
}

export default ProfileCard
