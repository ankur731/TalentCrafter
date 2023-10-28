import React, { useEffect, useState } from "react";
import "./Job.css";
import Tile from "./Tile";
import "../dashboard/JobCard.css";
import Apply from "./Apply";
import "../dashboard/JobCard.css";
import { useNavigate, useLocation } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useClipboard from "react-use-clipboard";
import AboutCompany from "./AboutCompany";
import { useParams } from "react-router";
import JobSkeleton from "./skeleton/JobSkeleton";

const baseUrl = 'https://talentcrafterbackend.onrender.com'
// const baseUrl = 'http://localhost:3001'


function Job() {
  const navigate = useNavigate();
  const location = useLocation();
  const [save, setSave] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isCopied, setCopied] = useClipboard(window.location.href);
  const [job, setJob] = useState();
  const { id } = useParams();

  useEffect(() => {
    // Function to fetch jobs from your server
    async function fetchJob() {
      try {
        const response = await fetch(`${baseUrl}/jobs/${id}`); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setJob(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job:", error);
        setLoading(false);
      }
    }

    fetchJob();
  }, []);

  const isApplyRoute = location.pathname.endsWith("/apply");

  const sendToApply = () => {
    navigate("apply");
  };

  const saveJob = () => {
    toast.success("Job Saved Successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setSave(!save);
  };

  const unsaveJob = () => {
    setSave(!save);
  };

  const linkCopied = () => {
    toast.success("Link Copied Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      limit: 1,
      progress: undefined,
      theme: "light",
    });
    setCopied();
  };

  return (
    <div className="container-fluid ">
      {loading ?
        <JobSkeleton /> :
        <div className="row mt-2 mb-5">
        <div className="col-1"></div>
        <div className="col-11">
          <h4 className="ps-1">Job Details</h4>
          <div className="job-div">
            <div className="row mt-1 ">
              <div className="col-8  job-main">
                <div className="job-main-top">
                  <div>
                    <h4>{job?.title}</h4>
                    <p>Twitter Inc.</p>
                  </div>
                  <p>1 Hour ago</p>
                </div>
                <hr className="top-divider" />
                  <div className="row ">
                    
                  <Tile heading="job Type" data={job?.type}  bgColor="#f0ebfd" />
                  <Tile heading="Experience Level" data={job?.experienceLevel} bgColor="#eaf6fd" />
                  <Tile heading="Salary" data={"Rs. "+job?.maxSalary} bgColor="#eaf7f0" />
                </div>
                <h5 className="mt-4">Description</h5>
                <p>{job?.description}</p>
                <h5 className="mt-4">Responsibilities :</h5>
                <ul>
                  {job?.responsibilities?.map((question) => {
                    return <li>{question}</li>;
                  })}
                  
                </ul>

                <h5>Skills and Experties</h5>
                <div className="skill-tab-row">
                    {job?.skills?.map((skill) => {
                      return <p>{skill}</p>
                  })}
                </div>
                {!isApplyRoute && (
                  <>
                    <hr className="bottom-divider" />
                    <div className="job-bottom">
                      <button onClick={sendToApply} className="apply-btn">
                        Apply Now
                      </button>
                      {save ? (
                        <button className="save-job-btn" onClick={saveJob}>
                          Save Job
                        </button>
                      ) : (
                        <button className="save-job-btn" onClick={unsaveJob}>
                          Unsave Job
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
              <div className="col-3">
                <AboutCompany />
                <div className="job-side job-side-bottom mt-3">
                  <h5>Other open role</h5>
                  <div className="other-job-bar mt-3">
                    <div className="other-job-bar-top ">
                      <h6>Executive Business</h6>
                      <p>Onsite</p>
                    </div>
                    <div className="other-job-bar-top">
                      <p>Posted 5h ago</p>
                      <p>Full Time</p>
                    </div>
                  </div>

                  <div className="other-job-bar mt-3">
                    <div className="other-job-bar-top ">
                      <h6>Executive Business</h6>
                      <p>Onsite</p>
                    </div>
                    <div className="other-job-bar-top">
                      <p>Posted 5h ago</p>
                      <p>Full Time</p>
                    </div>
                  </div>
                </div>
                <div className="job-link mt-3">
                  <h5>Job link</h5>
                  <input
                    className="col-12 mt-2 mb-2 job-link-input"
                    type="text"
                    value={window.location.href}
                  />
                  <p onClick={linkCopied}>Copy link</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
        {isApplyRoute && <Apply />}
      </div>
      }
    </div>
  );
}

export default Job;
