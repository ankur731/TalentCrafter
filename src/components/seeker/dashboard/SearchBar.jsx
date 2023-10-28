import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import JobCard from "./JobCard";
import JobCardSkeleton from "./JobCardSkeleton";

// const baseUrl = 'https://talentcrafterbackend.onrender.com'
// const baseUrl = "http://localhost:3001";

function SearchBar(props) {
  // const [jobs, setJobs] = useState(props.jobData);
  // useEffect(() => {
  //   if (props.jobData) {
  //     // setJobs(props.jobData);
  //     setTimeout(() => {
        
  //       setLoading(false)
  //     },1000)
  //   }
  // }, [props.jobData]);
  
  // useEffect(() => {
  //   props.search();
  // })

  return (
    <>
      <div className="search-bar">
        <h4>Search Job</h4>
        <input type="text" placeholder="UI Designer" />
        <button className="search-btn">Search</button>
      </div>
      {props.loading?<JobCardSkeleton />:
      props.jobData.map((job) => {
        return <JobCard  jobData={job} />;
      })
      }
    </>
  );
}

export default SearchBar;
