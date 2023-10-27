import React, { useState } from 'react'
import "./JobCard.css"
import { useNavigate } from 'react-router'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function JobCard(props) {

    const [save, setSave] = useState(true);
    const navigate = useNavigate();

    const sendToJob = (id) => {
        navigate(`/jobs/${id}`);
    }
    const sendToJobApply = (id) => {
        navigate(`/jobs/${id}/apply`);
    }

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
  }

    const unsaveJob = () => {
      setSave(!save)
  }

  return (
    <div className='job-card' >
          <div className='d-flex justify-content-between align-items-start'>
          <div className='job-card-top d-flex ' onClick={()=>sendToJob(props.jobData._id)}>
          <img className='com-logo' src={require("../../../assets/stack.png")} alt='companyLogo'/>
          <div className='job-card-abt'>
            <h4>{props.jobData?.title}</h4>
            <p>{props.jobData?.company}</p>
              </div>
              </div>
             {save?<button className="save-job-btn" onClick={saveJob}>
                      Save Job
                    </button>:<button className="save-job-btn" onClick={unsaveJob}>
                      Unsave Job
                    </button>}
          </div>
          <p className='mt-2 mb-2'>{props.jobData.description}</p>
          <div className='job-card-middle'>
        <button className='job-card-middle-btn'>{props.jobData?.type}</button>
        <button className='job-card-middle-btn'>{props.jobData?.experienceLevel}</button>
        <button className='job-card-middle-btn'>Rs. {props.jobData?.location}</button>
          </div>
          <hr className='job-card-bottom-line' />
          
          <div className='job-card-bottom'>
        <p><span>${ props.jobData?.minSalary }-{props.jobData?.maxSalary}</span> /Month</p>
              <p><span>354</span> People Applied</p>
              <button className='apply-btn' onClick={()=>sendToJobApply(props.jobData._id)}>Apply Now</button>
          </div>
    </div>
  )
}

export default JobCard
