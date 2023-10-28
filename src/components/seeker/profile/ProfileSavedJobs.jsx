import React, { useState } from 'react'
import "./Profile.css"
import "./ProfileSAvedJobs.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'



// const baseUrl = 'http://localhost:3001';
const baseUrl = 'https://talentcrafterbackend.onrender.com'

var userr = localStorage.getItem("user");
const userId = JSON.parse(userr).data.id;
    

function ProfileSavedJobs(props) {
  const [save, setSave] = useState(false);
  const convertDate=()=>{
    const isoDate = props.jobData?.postedAt;
  const date = isoDate ? new Date(isoDate) : null;
  return  date ? date.toLocaleDateString() : null;
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
        props.onUpdate();
        // fetchUser(props.jobData._id);
        // setSave(!save);
      }
    } catch (error) {
      console.error('Error saving job:', error);
    }
      

  }
  
  const unsaveJob = async(jobId) => {
    var userr = localStorage.getItem("user");
    const userId = JSON.parse(userr).data.id;

    try {
      const response = await axios.delete(`${baseUrl}/user/${userId}/job/${jobId}`)
      
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
        props.onUpdate();
        // fetchUser(props.jobData._id);
        // setSave(!save);
      }
    } catch (error) {
      console.error('Error saving job:', error);
    }
  }

  return (
   <>
    <div className="applied-bar mt-3">
      <div className="applied-bar-top">
          <h6>{props.jobData?.title}</h6>
            <p onClick={() => unsaveJob(props.jobData?._id)}>unsave</p>
      </div>
      <div className="applied-bar-bottom mt-1">
        <p>{props.jobData?.location}</p>
        <p>{convertDate()}</p>
      </div>
    </div>
    </>
  )
}

export default ProfileSavedJobs
