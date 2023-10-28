import React, { useEffect, useState } from "react";
import "./ExpFilter.css";

function ExpFilter(props) {
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
  
    if (selectedExperienceLevels.includes(value)) {
      setSelectedExperienceLevels((prevLevels) =>
        prevLevels.filter((level) => level !== value)
      );
    } else {
      setSelectedExperienceLevels((prevLevels) => [...prevLevels, value]);
    }
  };
  useEffect(() => {
    // console.log(selectedExperienceLevels);
    // Construct the query parameters based on the selectedExperienceLevels
    const queryParameters = selectedExperienceLevels
      .map((level) => `experienceLevel=${level}`)
      .join('&');
  
    // Pass the query parameters to the parent component's function
    props.experience(queryParameters)
    // props.fetchJobs(queryParameters);
  }, [selectedExperienceLevels]);
    
    

  return (
    <div className="exp-level-filter">
      <div className="exp-level mb-3">
        <h4>Experience Level</h4>
        <p>Clear</p>
      </div>
      <div className="exp-level">
        <input
          type="checkbox"
          name="entry"
          value="Entry"
          checked={selectedExperienceLevels.includes("Entry")}
          onChange={handleCheckboxChange}
        />
        <h5>Entry Level</h5>
        <p>25 jobs</p>
      </div>
      <div className="exp-level">
        <input
          type="checkbox"
          name="intermediate"
          value="Intermediate"
          checked={selectedExperienceLevels.includes("Intermediate")}
          onChange={handleCheckboxChange}
        />
        <h5>Intermediate</h5>
        <p>25 jobs</p>
      </div>
      <div className="exp-level">
        <input
          type="checkbox"
          name="expert"
          value="Expert"
          checked={selectedExperienceLevels.includes("Expert")}
          onChange={handleCheckboxChange}
        />
        <h5>Expert</h5>
        <p>25 jobs</p>
      </div>
    </div>
  );
}

export default ExpFilter;
