import React, { useEffect, useState } from "react";
import "./Profile.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddIcon from "@mui/icons-material/Add";
import ProfileEducation from "./ProfileEducation";
import ProfileExperience from "./ProfileExperience";
import ProfileCertification from "./ProfileCertification";
import ProfileSkill from "./ProfileSkill";
import ProfileApplications from "./ProfileApplications";
import ProfileSavedJobs from "./ProfileSavedJobs";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
// import "../node_modules/react-dialog-confirm/build/index.css"; // required
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DatePicker } from "@mui/x-date-pickers";
import { FileUploader } from "react-drag-drop-files";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CertificateSkeleton from "./skeleton/CertificateSkeleton";
import SkillSkeleton from "./skeleton/SkillSkeleton";
import { useParams } from "react-router";
import EducationSkeleton from "./skeleton/EducationSkeleton";
import axios from "axios";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import PersonalDetailsSkeleton from "./skeleton/PersonalDetailsSkeleton";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const baseUrl = 'https://talentcrafterbackend.onrender.com'
// const baseUrl = 'http://localhost:3001'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #eeeeec",
  boxShadow: 24,
  borderRadius: "8px",
  p: 3,
};

function Profile() {
  const [editOpen, setEditOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const [addOpen, setAddOpen] = useState(false);
  const [educationDetails, setEducationDetails] = useState([]);
  const { dispatch } = useAuthContext();

  const [educationFormValues, setEducationFormValues] = useState({
    university: "",
    degree: "",
    from: "",
    to: "",
    grade: "",
    type: "",
    description: "",
  });
  const [personalFormValues, setPersonalFormValues] = useState({
    email: "",
    name: "",
    location: "",
    role: "",
    description: "",
    skills: [],
  });
  var userr = localStorage.getItem("user");
  const { id } = JSON.parse(userr).data;

  useEffect(() => {
    // Function to fetch jobs from your server

    fetchUser();
    // console.log(education);
    // fetchUserEducation();
  }, []);

  async function fetchUser() {
    axios
      .get(`${baseUrl}/user/${id}`) // Replace with your user ID or fetch method
      .then((response) => {
        // const data = response.json();
        setUser(response.data);
        setPersonalFormValues(response.data)
        dispatch({type:'LOGIN', payload:response})
        const educations = response.data.education;

        // Fetch education details for each education ID
        const educationPromises = response.data.education.map((educationId) => {
          return axios.get(`${baseUrl}/education/${educationId}`);
        });

        // Wait for all education details requests to complete
        Promise.all(educationPromises)
          .then((educationResponses) => {
            // Set the fetched education details
            const educationDetails = educationResponses.map((res) => res.data);
            setEducationDetails(educationDetails);
            setLoading(false)
            // console.log(educationDetails);
          })
          .catch((error) => {
            console.error("Error fetching education details:", error);
            setLoading(false)
          });
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setLoading(false)
      });
  }

  //delete education

  const handleEducationDelete = (educationId) => {
    setLoading(true);
    var userr = localStorage.getItem("user");
    const userId = JSON.parse(userr).data.id;
    axios
      .delete(`${baseUrl}/education/${userId}/${educationId}`)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Deletion Successfull !", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          fetchUser();
          // setLoading(false);
          // dispatch({ type: 'ADD_EDUCATION', payload: response.data })
        } else {
          toast.error("Something went wrong !", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          fetchUser();
          // setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error deleting education:", error);
        // Handle errors, e.g., display an error message
      }) 
      
  };


  //education edit


  const handleEducationEdit = (educationFormValues, educationId) => {
    setLoading(true);
    var userr = localStorage.getItem("user");
    const userId = JSON.parse(userr).data.id;

    axios.put(`${baseUrl}/education/${userId}/${educationId}`, educationFormValues)
    .then((response) => {
      if (response.status === 201) {
        toast.success("edit Successfull !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        fetchUser();
      } else {
        toast.error("Something went wrong !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        fetchUser();
        // setLoading(false);
      }
    })
    .catch((error) => {
      // Handle errors, e.g., display an error message
      console.error('Error updating education data:', error);
      setLoading(false);
    });
  }
  const handlePersonalEdit = (personalFormValues) => {
    setLoading(true);
    var userr = localStorage.getItem("user");
    const userId = JSON.parse(userr).data.id;

    axios.put(`${baseUrl}/user/${userId}`, personalFormValues)
    .then((response) => {
      if (response.status === 201) {
        toast.success("edit Successfull !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        fetchUser();
      } else {
        toast.error("Something went wrong !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        fetchUser();
        // setLoading(false);
      }
    })
    .catch((error) => {
      // Handle errors, e.g., display an error message
      console.error('Error updating personal data:', error);
      setLoading(false);
    });
  }

  const handleEducationChange = (event) => {
    const { id, value } = event.target;
    setEducationFormValues({
      ...educationFormValues,
      [id]: value,
    });
  };
  const handlePersonalChange = (event) => {
    const { id, value } = event.target;
    setPersonalFormValues({
      ...personalFormValues,
      [id]: value,
    });
  };

  const handleAddOpen = () => {
    // console.log(props.education);
    setAddOpen(!addOpen);
  };

  const handleAddClose = () => {
    setAddOpen(!addOpen);
  };

  //education add

  const handleAdd = async (e) => {
    e.preventDefault();
    // console.log(educationFormValues)
    var userr = localStorage.getItem("user");
    const userId = JSON.parse(userr).data.id;
    try {
      const response = await axios.post(
        `${baseUrl}/education/${userId}`,
        educationFormValues
        ); // Replace with your API endpoint
        setAddOpen(!addOpen);
        setLoading(true)
      //  const json = await JSON.parse(response)
      if (response.status === 201) {
        toast.success("Addition Successfull !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        fetchUser();
        // setLoading(false);
      } else {
        toast.error("Something went wrong !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // setLoading(false);
      }
      // console.log('Data sent to the server:', response.data);
    } catch (error) {
      console.error("Error sending data:", error);
      // setLoading(false);
      // setError(error);
    }

   

    setEducationFormValues("");
  };

  const handleEditOpen = () => {
    setEditOpen(!editOpen);
  };

  const handleEditClose = () => {
    setEditOpen(!editOpen);
  };

  const handleEdit = () => {
    setEditOpen(!editOpen);
    handlePersonalEdit(personalFormValues);
  };

  return (
    <div className="container-fluid profile">
      <div className="row mt-3 py-3">
        <div className="col-1"></div>
        <div className="col-11">
          <div className="row">
            <div className="col-8 profile-div">
              <div className="profile-top mt-0">
              
                  {loading ?
      <PersonalDetailsSkeleton />:<>
                    <div className="profile-top-bar  mb-3">
                      <div className="action-btnn">
                        <ModeEditIcon
                          style={{ fill: "#686868", cursor: "pointer" }}
                          onClick={handleEditOpen}
                        />

                        <Modal
                          open={editOpen}
                          TransitionComponent={Transition}
                          onClose={handleEditClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                      <Box sx={style}>
                      <form>
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              Enter Personal Details
                            </Typography>

                            {/* <Box sx={style}> */}
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Name"
                              type="text"
                              fullWidth
                            variant="standard"
                            value={personalFormValues.name}
                            onChange={handlePersonalChange}
                            />
                            <TextField
                              autoFocus
                              margin="dense"
                              id="email"
                              label="Email"
                              type="text"
                              fullWidth
                            variant="standard"
                            value={personalFormValues.email}
                            onChange={handlePersonalChange}
                            />
                            <TextField
                              autoFocus
                              margin="dense"
                              id="location"
                              label="Location"
                              type="text"
                              fullWidth
                            variant="standard"
                            value={personalFormValues.location}
                            onChange={handlePersonalChange}
                            />

                            {/* <DatePicker /> */}
                            <TextField
                              autoFocus
                              margin="dense"
                              id="role"
                              label="Role"
                              type="text"
                              fullWidth
                            variant="standard"
                            value={personalFormValues.role}
                            onChange={handlePersonalChange}
                            />

                            <TextField
                              autoFocus
                              margin="dense"
                              id="description"
                              label="Description"
                              type="text"
                              fullWidth
                            variant="standard"
                            value={personalFormValues.description}
                            onChange={handlePersonalChange}
                        />
                        
                            <label className="mt-3 mb-2">
                              Upload Profile Photo
                            </label>
                        <FileUploader />
                            <DialogActions className="mt-4">
                              <Button
                                variant="outlined"
                                onClick={handleEditClose}
                              >
                                Cancel
                              </Button>
                              <Button
                                variant="contained"
                                color="success"
                                onClick={handleEdit}
                              >
                                Save
                              </Button>
                        </DialogActions>
                        </form>
                          </Box>
                          {/* </Box> */}
                        </Modal>
                      </div>
                      <img
                        className="profile-pic"
                        src={require("../../../assets/person.jpg")}
                        alt="profile-pic"
                      />
                      <div>
                        <h4>{user?.name}</h4>
                    <p>{user?.location}</p>
                      </div>
                    </div>

                    <h4>{user?.role}</h4>
                    <p className="mt-1">
                      {user?.description}
                  </p>
                  </>}
               
              </div>
              <div className="profile-education mt-3">
                <h4 className="mb-4 mt-2 profile-heading">Education</h4>
                <button className="action-btn">
                  <AddIcon
                    style={{ fill: "#686868", cursor: "pointer" }}
                    onClick={handleAddOpen}
                  />
                </button>

                <Modal
                  open={addOpen}
                  onClose={handleAddClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Enter Education Details
                    </Typography>

                    <form onSubmit={handleAdd}>
                      {/* <Box sx={style}> */}
                      <TextField
                        autoFocus
                        margin="dense"
                        id="university"
                        label="University Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={educationFormValues.university}
                        onChange={handleEducationChange}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="degree"
                        label="Degree Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={educationFormValues.degree}
                        onChange={handleEducationChange}
                      />
                      <input
                        type="date"
                        id="from"
                        value={educationFormValues.from}
                        onChange={handleEducationChange}
                      />
                      <input
                        type="date"
                        id="to"
                        value={educationFormValues.to}
                        onChange={handleEducationChange}
                      />
                      <input
                        type="text"
                        id="grade"
                        value={educationFormValues.grade}
                        onChange={handleEducationChange}
                      />

                      {/* <DatePicker /> */}
                      <TextField
                        autoFocus
                        margin="dense"
                        id="type"
                        label="Degree Type"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={educationFormValues.type}
                        onChange={handleEducationChange}
                      />

                      <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={educationFormValues.description}
                        onChange={handleEducationChange}
                      />
                      <label className="mt-3 mb-2">Upload Certificate</label>
                      <FileUploader />
                      <DialogActions className="mt-4">
                        <Button variant="outlined" onClick={handleAddClose}>
                          Cancel
                        </Button>
                        <Button
                          variant="contained"
                          type="submit"
                          color="success"
                        >
                          Save
                        </Button>
                      </DialogActions>
                    </form>
                  </Box>
                  {/* </Box> */}
                </Modal>
                {loading ? (
                  <EducationSkeleton />
                ) : (
                  educationDetails?.map((educationData) => {
                    return (
                      <>
                        <ProfileEducation
                          education={educationData}
                          onDelete={handleEducationDelete}
                          onEdit={handleEducationEdit}
                        />
                        <hr className="mt-5" />
                      </>
                    );
                  })
                )}
              </div>
              <div className="profile-experience mt-3">
                <h4 className="mb-4 mt-2 profile-heading">Experience</h4>

                <ProfileExperience />
                <hr className="mt-5" />
                <ProfileExperience />
              </div>

              <div className="profile-certification mt-3">
                <h4 className="mb-4 mt-2 profile-heading">Certification</h4>
                {/* <CertificateSkeleton /> */}
                <ProfileCertification />
                <hr className="mt-5" />
                <ProfileCertification />
              </div>
              {/* <SkillSkeleton /> */}
              <ProfileSkill />
            </div>
            <div className="col-3">
              <ProfileApplications />
              <ProfileSavedJobs />
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Profile;
