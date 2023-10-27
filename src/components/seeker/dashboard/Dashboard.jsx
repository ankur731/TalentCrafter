import React from "react";
import ProfileCard from "./ProfileCard";
import "./Dashboard.css";
import ExperienceCard from "./ExperienceCard";
import SkillCard from "./SkillCard";
import SearchBar from "./SearchBar";
import ExpFilter from "./ExpFilter";
import LocationFilter from "./LocationFilter";
import JobTypeFilter from "./JobTypeFilter";
import ApplicantsFilter from "./ApplicantsFilter";



function Dashboard() {
  return (
    <div style={{overflow:"hidden"}} className="dashboard container-fluid">
      <div className="row dashboard-row">
        <div className="col-sm-3 dashboard-left scroll">
          <ProfileCard />
          <ExperienceCard />
          <SkillCard />
        </div>
        <div className="col-sm-6 dashboard-main scroll">
          <SearchBar />
        </div>
        <div className="col-sm-3  dashboard-right scroll">
          <ExpFilter />
          <LocationFilter />
          <JobTypeFilter />
          <ApplicantsFilter />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
