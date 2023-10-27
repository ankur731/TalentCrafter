import React from 'react'
import "./ApplicantsFilter.css";

function ApplicantsFilter() {
  return (
    <div className='applicants-filter'>
          <div className='applicants mb-3'>
              <h4>Applicants</h4>
              <p>Clear</p>
        </div>
          <div className='applicants'>
              <input type='checkbox' />
              <h5>Less than 10</h5>
              <p>25 jobs</p>
        </div>
          <div className='applicants'>
              <input type='checkbox' />
              <h5>10 - 50</h5>
              <p>25 jobs</p>
        </div>
          <div className='applicants'>
              <input type='checkbox' />
              <h5>More than 50 </h5>
              <p>25 jobs</p>
        </div>
    </div>
  )
}

export default ApplicantsFilter
