import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import JobCard from "./JobCard";
import JobCardSkeleton from "./JobCardSkeleton";

const baseUrl = 'https://talentcrafterbackend.onrender.com'

function SearchBar() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch jobs from your server
    async function fetchJobs() {
      try {
        const response = await fetch(`${baseUrl}/jobs`); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setJobs(data);
        console.log(jobs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <>
      <div className="search-bar">
        <h4>Search Job</h4>
        <input type="text" placeholder="UI Designer" />
        <button className="search-btn">Search</button>
      </div>
      {loading?<JobCardSkeleton />:
      jobs.map((job) => {
        return <JobCard  jobData={job} />;
      })
      }
    </>
  );
}

export default SearchBar;
