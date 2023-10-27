import React from "react";
import "./Job.css";
import "../dashboard/JobCard.css";
import "./AboutCompany.css";

function AboutCompany() {
  return (
    <div className="job-side job-side-top">
      <div className="about-company-top">
        <img
          className="com-logo small-com-logo"
          src={require("../../../assets/twitter.png")}
          alt="twitter"
        />
        <div className="abt-company">
          <h4>Twitter Inc.</h4>
          <p>Social Networking Service</p>
        </div>
      </div>
      <div className="about-company mt-2">
        <p>San Fransisco, America</p>
        <p>720 employees onsite</p>
        <p>43 subsidiaries</p>
        <p className="mt-3">
          Twitter is an socil networking and microblogging service that allows
          its user to present their views.
        </p>
      </div>
    </div>
  );
}

export default AboutCompany;
