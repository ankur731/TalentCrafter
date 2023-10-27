import React from 'react'
import "./ExpFilter.css"

function ExpFilter() {
  return (
    <div className='exp-level-filter'>
          <div className='exp-level mb-3'>
              <h4>Experience Level</h4>
              <p>Clear</p>
        </div>
          <div className='exp-level'>
              <input type='checkbox' />
              <h5>Entry Level</h5>
              <p>25 jobs</p>
        </div>
          <div className='exp-level'>
              <input type='checkbox' />
              <h5>Intermediate</h5>
              <p>25 jobs</p>
        </div>
          <div className='exp-level'>
              <input type='checkbox' />
              <h5>Expert</h5>
              <p>25 jobs</p>
        </div>
    </div>
  )
}

export default ExpFilter
