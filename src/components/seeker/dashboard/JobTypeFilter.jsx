import React, { useEffect, useState } from "react";
import "./JobTypeFilter.css";

function JobTypeFilter(props) {
  const [selectedType, setSelectedType] = useState([]);

 
  const handleCheckboxChange = (event) => {
    const { value } = event.target;
  
    if (selectedType.includes(value)) {
      setSelectedType((prevLevels) =>
        prevLevels.filter((level) => level !== value)
      );
    } else {
      setSelectedType((prevLevels) => [...prevLevels, value]);
    }
  };

  
useEffect(() => {
  // Construct the query parameters based on the selectedLocation
  console.log(selectedType);

  const queryParameters = selectedType
    .map((level) => `jobType=${level}`)
    .join('&');

  // Pass the query parameters to the parent component's function
  props.jobType(queryParameters)
  // props.fetchJobs(queryParameters);
}, [selectedType]);
  
  return (
    <div className="job-type-level-filter">
      <div className="job-type-level mb-3">
        <h4>Job Type</h4>
        <p>Clear</p>
      </div>
      <div className="job-type-level">
        <input
          type="checkbox"
          value="Full Time"
          checked={selectedType.includes("Full Time")}
          onChange={handleCheckboxChange}
        />
        <h5>Full Time</h5>
        <p>25 jobs</p>
      </div>
      <div className="job-type-level">
        <input
          type="checkbox"
          value="Freelance"
          checked={selectedType.includes("Freelance")}
          onChange={handleCheckboxChange}
        />
        <h5>Freelance</h5>
        <p>25 jobs</p>
      </div>
      <div className="job-type-level">
        <input
          type="checkbox"
          value="Part Time"
          checked={selectedType.includes("Part Time")}
          onChange={handleCheckboxChange}
        />
        <h5>Part Time</h5>
        <p>25 jobs</p>
      </div>
    </div>
  );
}

export default JobTypeFilter;
