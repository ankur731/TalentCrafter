import React, { useEffect, useState } from "react";
import "./LocationFilter.css";

function LocationFilter(props) {
  const [selectedLocation, setSelectedLocation] = useState([]);

 
const handleCheckboxChange = (event) => {
  const { value } = event.target;

  if (selectedLocation.includes(value)) {
    setSelectedLocation((prevLevels) =>
      prevLevels.filter((level) => level !== value)
    );
  } else {
    setSelectedLocation((prevLevels) => [...prevLevels, value]);
  }
};
 

 
useEffect(() => {
  // Construct the query parameters based on the selectedLocation
  console.log(selectedLocation);

  const queryParameters = selectedLocation
    .map((level) => `location=${level}`)
    .join('&');

  // Pass the query parameters to the parent component's function
  props.location(queryParameters)
  // props.fetchJobs(queryParameters);
}, [selectedLocation]);

  return (
    <div className="location-level-filter">
      <div className="location-level mb-3">
        <h4>Job Location</h4>
        <p>Clear</p>
      </div>
      <div className="location-level">
        <input
          type="checkbox"
          name="onsite"
          value="Onsite"
          checked={selectedLocation.includes("Onsite")}
          onChange={handleCheckboxChange}
        />
        <h5>Onsite</h5>
        <p>25 jobs</p>
      </div>
      <div className="location-level">
      <input
          type="checkbox"
          name="remote"
          value="Remote"
          checked={selectedLocation.includes("Remote")}
          onChange={handleCheckboxChange}
        />
        <h5>Remote</h5>
        <p>25 jobs</p>
      </div>
      <div className="location-level">
      <input
          type="checkbox"
          name="hybrid"
          value="Hybrid"
          checked={selectedLocation.includes("Hybrid")}
          onChange={handleCheckboxChange}
        />
        <h5>Hybrid</h5>
        <p>25 jobs</p>
      </div>
    </div>
  );
}

export default LocationFilter;
