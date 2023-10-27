import React from 'react'
import "./JobTypeFilter.css";

function JobTypeFilter() {
  return (
    <div className='job-type-level-filter'>
          <div className='job-type-level mb-3'>
              <h4>Job Type</h4>
              <p>Clear</p>
        </div>
          <div className='job-type-level'>
              <input type='checkbox' />
              <h5>Full Time</h5>
              <p>25 jobs</p>
        </div>
          <div className='job-type-level'>
              <input type='checkbox' />
              <h5>Freelance</h5>
              <p>25 jobs</p>
        </div>
          <div className='job-type-level'>
              <input type='checkbox' />
              <h5>Part Time</h5>
              <p>25 jobs</p>
        </div>
    </div>
  )
}

export default JobTypeFilter
