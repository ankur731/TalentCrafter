import React from 'react'
import "./LocationFilter.css";

function LocationFilter() {
  return (
    <div className='location-level-filter'>
          <div className='location-level mb-3'>
              <h4>Job Location</h4>
              <p>Clear</p>
        </div>
          <div className='location-level'>
              <input type='checkbox' />
              <h5>Onsite</h5>
              <p>25 jobs</p>
        </div>
          <div className='location-level'>
              <input type='text' className='city-search' placeholder='Delhi'/>
              {/* <h5>Expert</h5>
              <p>25 jobs</p> */}
        </div>
          <div className='location-level'>
              <input type='checkbox' />
              <h5>Remote</h5>
              <p>25 jobs</p>
        </div>
    </div>
  )
}

export default LocationFilter
