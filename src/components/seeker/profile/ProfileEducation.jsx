import React, { useEffect } from "react";
import { useState } from "react";
import "./Profile.css";
import "./ProfileEducation.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddIcon from "@mui/icons-material/Add";
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
import EducationSkeleton from "./skeleton/EducationSkeleton";
import axios from "axios";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

const baseUrl = 'https://talentcrafterbackend.onrender.com'


function ProfileEducation(props) {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const { dispatch } = useAuthContext()
  const [formValues, setFormValues] = useState({
    university: "",
    degree: "",
    from: "",
    to: "",
    grade: "",
    type: "",
    description: "",
  });

  
 
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const handleDeleteOpen = () => {
    setDeleteOpen(!deleteOpen);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(!deleteOpen);
  };

  const handleDelete = (educationId) => {
    var userr = localStorage.getItem("user");
    const { userId } = JSON.parse(userr).data;
   
    props.onDelete(educationId);
        
    setDeleteOpen(!deleteOpen);
  };

  const handleEditOpen = (educationId) => {
    const { university, degree, from, to, grade, type, description } = props.education;
    const newData = {
      university: university,
      degree: degree,
      from: from,
      to: to,
      grade: grade,
      type: type,
      description: description,
    }
    setFormValues(newData)
    setEditOpen(!editOpen);
  };

  const handleEditClose = () => {
    setEditOpen(!editOpen);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    props.onEdit(formValues, props.education?._id);
    setFormValues('');

  };

 
  

  return (
  
  <>
    
    <div className="edit-bar mt-3">
       
      {props.education?.university ? <h5>{props.education.university}</h5> :
        <h5>Guru Gobind singh university test</h5>} 
      <div className="action-btns">
        <ModeEditIcon
          style={{ fill: "#686868", cursor: "pointer" }}
          onClick={()=>handleEditOpen(props.education?._id)}
        />
        <Modal
          open={editOpen}
          onClose={handleEditClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
              <form onSubmit={handleEdit}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Enter Education Details
            </Typography>

            {/* <Box sx={style}> */}
            <TextField
              autoFocus
              margin="dense"
              id="university"
              label="University/College Name"
              type="text"
              fullWidth
                variant="standard"
                value={formValues.university}
                onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="degree"
              label="Degree Name"
              type="text"
              fullWidth
                variant="standard"
                value={formValues.degree}
                onChange={handleChange}
            />

            {/* <DatePicker /> */}
            <TextField
              autoFocus
              margin="dense"
              id="educationType"
              label="Type"
              type="text"
              fullWidth
                variant="standard"
                value={formValues.type}
                onChange={handleChange}
            />

            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
                variant="standard"
                value={formValues.description}
                onChange={handleChange}
            />
            <label className="mt-3 mb-2">Upload Certificate</label>
            <FileUploader />
            <DialogActions className="mt-4">
              <Button variant="outlined" onClick={handleEditClose}>
                Cancel
              </Button>
              <Button
                variant="contained"
                  color="success"
                  type="submit"
              >
                Save
              </Button>
              </DialogActions>
              </form>
          </Box>
          {/* </Box> */}
        </Modal>

        <DeleteIcon
          style={{ fill: "#686868", cursor: "pointer" }}
          onClick={handleDeleteOpen}
        />
        <Dialog
          open={deleteOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleDeleteClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{" Are you sure you want to Delete it ?"}</DialogTitle>

          <DialogActions>
            <Button variant="outlined" onClick={handleDeleteClose}>
              Cancel
            </Button>
            <Button variant="contained" color="error" onClick={()=>handleDelete(props.education?._id)}>
                Delete
              </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
    {props.education?.degree ? <h6>{props.education.degree}</h6> :
      <h6>Bachelor in Computer Application test</h6>}
      
    <p>2021-2024</p>
    
        <p className="mt-2">
          {props.education?.description}
          </p>
            {/* <p>Hello Everyone, I am an web developer, coding and Tech enthusiast with
          skills in front-end and back-end development. Proficient in multiple
          programming languages and experienced in creating responsive and
          user-friendly websites. Continuously learning and expanding my knowledge
          in the field.Test </p> */}
  </>
     
  );
}

export default ProfileEducation;
