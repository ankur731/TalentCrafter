import React from 'react'
import "./ExperienceCard.css"

function ExperienceCard() {
  return (
    <div className='experience-card'>
        <h4>Work Experience</h4>
          <div className='experience'>
              <img className='exp-logo' src={require("../../../assets/person.jpg")} alt='exp-logo'/>
              <div className='exp-content'>
              <h5>Junior UI Designer</h5>
              <p>Airbnb - FullTime </p>
              </div>
              <p className='exp-duration'>2 yrs</p>
        </div>
          <div className='experience'>
              <img className='exp-logo' src={require("../../../assets/person.jpg")} alt='exp-logo'/>
              <div className='exp-content'>
              <h5>Intern UI Designer</h5>
              <p>Airbnb - FullTime </p>
              </div>
              <p className='exp-duration'>2 yrs</p>
        </div>
        
    </div>
  )
}

export default ExperienceCard
