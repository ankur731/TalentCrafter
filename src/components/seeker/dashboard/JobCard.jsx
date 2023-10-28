import React, { useEffect, useState } from 'react'
import "./JobCard.css"
import { useNavigate } from 'react-router'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

// const baseUrl = 'http://localhost:3001';
const baseUrl = 'https://talentcrafterbackend.onrender.com'

var userr = localStorage.getItem("user");
const userId = JSON.parse(userr).data.id;
    
function JobCard(props) {

    const [save, setSave] = useState(true);
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Function to fetch jobs from your server

    fetchUser(props.jobData._id);
  }, []);

  function fetchUser(jobId) {
    axios
      .get(`${baseUrl}/user/${userId}`) // Replace with your user ID or fetch method
      .then((response) => {
        setUser(response.data);
        // console.log(user);
        response.data.savedJobs.map((item) => {
          if (item === jobId) {
            setSave(false);
          }
        })
      
      })
      .catch((error) => {
          console.error("Error fetching user data:", error);
          setLoading(false)
      });
  }

    const sendToJob = (id) => {
        navigate(`/jobs/${id}`);
    }
    const sendToJobApply = (id) => {
        navigate(`/jobs/${id}/apply`);
    }

  const saveJob = async (jobId) => {
    try {
      const response = await axios.put(`${baseUrl}/user/${userId}/job/${jobId}`)

      console.log(response.data)
      if (response.status === 201) {
        // Job saved successfully; update the user object to reflect the change
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
        fetchUser(props.jobData._id);
        setSave(!save);
      }
    } catch (error) {
      console.error('Error saving job:', error);
    }
      

  }

  const unsaveJob = async(jobId) => {
    var userr = localStorage.getItem("user");
    const userId = JSON.parse(userr).data.id;

    try {
      const response = await axios.delete(`http://localhost:3001/user/${userId}/job/${jobId}`)

      console.log(response.data)
      if (response.status === 201) {
        // Job saved successfully; update the user object to reflect the change
        toast.success("Job Unsaved Successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }); 
        fetchUser(props.jobData._id);
        setSave(!save);
      }
    } catch (error) {
      console.error('Error saving job:', error);
    }
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
             {save?<button className="save-job-btn" onClick={()=>saveJob(props.jobData?._id)}>
                      Save Job
                    </button>:<button className="save-job-btn" onClick={()=>unsaveJob(props.jobData?._id)}>
                      Unsave Job
                    </button>}
          </div>
          <p className='mt-2 mb-2'>{props.jobData.description}</p>
          <div className='job-card-middle'>
        <button className='job-card-middle-btn'>{props.jobData?.type}</button>
        <button className='job-card-middle-btn'>{props.jobData?.experienceLevel}</button>
        <button className='job-card-middle-btn'>{props.jobData?.location}</button>
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
