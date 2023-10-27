import React from 'react'
import "./Profile.css";
import "./ProfileSkill.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddIcon from "@mui/icons-material/Add";
import SkillSkeleton from './skeleton/SkillSkeleton';

function ProfileSkill() {
  return (
    <div className='profile-skill mt-3'>
                      <button className='action-btn'>
              <AddIcon style={{cursor:"pointer", fill:"#686868"}} />
                      </button>
                      <h4 className='mb-4 profile-heading'>Skills</h4>
                      {/* <SkillSkeleton /> */}
                      <div className='skill-section'>
                      <p className='skill-bar'>HTML</p>
                      <p className='skill-bar'>HTML</p>
                      <p className='skill-bar'>HTML</p>
                      <p className='skill-bar'>HTML</p>
                      <p className='skill-bar'>HTML</p>
                      <p className='skill-bar'>HTML</p>
                      </div>
                  </div>
  )
}

export default ProfileSkill
