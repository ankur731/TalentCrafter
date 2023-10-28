import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import "./Dashboard.css";
import ExperienceCard from "./ExperienceCard";
import SkillCard from "./SkillCard";
import SearchBar from "./SearchBar";
import ExpFilter from "./ExpFilter";
import LocationFilter from "./LocationFilter";
import JobTypeFilter from "./JobTypeFilter";
import ApplicantsFilter from "./ApplicantsFilter";
import JobCardSkeleton from "./JobCardSkeleton";


const baseUrl = 'https://talentcrafterbackend.onrender.com'
// const baseUrl = "http://localhost:3001";


function Dashboard(props) {
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedJobType, setSelectedJobType] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  

  async function fetchJobs(query) {
    let combinedQuery = '';

    // const combinedQuery=`${selectedExperienceLevels}`+'&'+`${selectedLocation}`+'&'+`${selectedJobType}`
    if (selectedExperienceLevels) {
      if(!combinedQuery.includes(selectedExperienceLevels))
        combinedQuery+=`${selectedExperienceLevels}`+'&'
    }
    if (selectedLocation) {
      if(!combinedQuery.includes(selectedLocation))
        combinedQuery+=`${selectedLocation}`+'&'
    }
    if (selectedJobType) {
      if(!combinedQuery.includes(selectedJobType))
          combinedQuery+=`${selectedJobType}`+'&'
    }
    
    console.log(combinedQuery)

    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/jobs?${combinedQuery}`); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json(); 
      setJobs(data);
      // console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setLoading(false);
    }
  }
  useEffect(() => {
    // Call the API request with the updated query parameters
    fetchJobs();
  }, [selectedExperienceLevels, selectedLocation, selectedJobType]);


  return (
    <div style={{overflow:"hidden"}} className="dashboard container-fluid">
      <div className="row dashboard-row">
        <div className="col-sm-3 dashboard-left scroll">
          <ProfileCard />
          <ExperienceCard />
          <SkillCard />
        </div>
        <div className="col-sm-6 dashboard-main scroll">
          
            <SearchBar loading={loading}   search={()=>fetchJobs} jobData={jobs} />
        </div>
        <div className="col-sm-3  dashboard-right scroll">
            <ExpFilter experience={setSelectedExperienceLevels} fetchJobs={fetchJobs} />
          <LocationFilter location={setSelectedLocation} fetchJobs={fetchJobs}/>
          <JobTypeFilter jobType={setSelectedJobType} fetchJobs={fetchJobs}/>
          <ApplicantsFilter />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
