import React from "react";
import { useState } from "react";
import "./Profile.css";
import "./ProfileExperience.css";
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

function ProfileExperience() {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
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
  const handleDelete = () => {
    setDeleteOpen(!deleteOpen);
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
  };

  const handleEditOpen = () => {
    setEditOpen(!editOpen);
  };

  const handleEditClose = () => {
    setEditOpen(!editOpen);
  };

  const handleEdit = () => {
    setEditOpen(!editOpen);
    toast.success("Edit Successfull !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleAddOpen = () => {
    setAddOpen(!addOpen);
  };

  const handleAddClose = () => {
    setAddOpen(!addOpen);
  };

  const handleAdd = () => {
    setAddOpen(!addOpen);

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
  };

  return (
    <>
      {/* <EducationSkeleton /> */}
      <button className="action-btn">
        <AddIcon style={{fill:"#686868",cursor:"pointer"}} onClick={handleAddOpen} />
          </button>
          <Modal
        open={addOpen}
        onClose={handleAddClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter Experience Details
          </Typography>
         
                  
                 
        {/* <Box sx={style}> */}
        <TextField
                autoFocus
                margin="dense"
                id="companyName"
                label="Company Name"
                type="text"
                fullWidth
                variant="standard"
                                  />
              <TextField
                autoFocus
                margin="dense"
                id="designation"
                label="Designation"
                type="text"
                fullWidth
                variant="standard"
                                  />
                
                                  {/* <DatePicker /> */}
              <TextField
                autoFocus
                margin="dense"
                id="type"
                label="type"
                type="text"
                fullWidth
                variant="standard"
                  />
                  
                      <TextField
                          autoFocus
                margin="dense"
                id="designationDescription"
                label="Description"
                type="text"
                fullWidth
                variant="standard" />
                  <label className='mt-3 mb-2'>Upload Certificate</label>
                  <FileUploader />
                  <DialogActions className='mt-4'>
            <Button variant="outlined" onClick={handleAddClose}>
              Cancel
            </Button>
            <Button variant="contained" color="success" onClick={handleAdd}>
              Save
            </Button>
          </DialogActions>
        </Box>
        {/* </Box> */}
      </Modal>
      {/* <h4 className="mb-4 profile-heading">Experience</h4> */}
      <div className="edit-bar mt-2">
        <h5>Codeify It Service Pvt Ltd</h5>
        <div className="action-btns">
                  <ModeEditIcon style={{fill:"#686868",cursor:"pointer"}} onClick={handleEditOpen}/>
                  <Modal
        open={editOpen}
        onClose={handleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter Experience Details
          </Typography>
         
                  
                 
        {/* <Box sx={style}> */}
        <TextField
                autoFocus
                margin="dense"
                id="companyName"
                label="Company Name"
                type="text"
                fullWidth
                variant="standard"
                                  />
              <TextField
                autoFocus
                margin="dense"
                id="designation"
                label="Designation"
                type="text"
                fullWidth
                variant="standard"
                                  />
                
                                  {/* <DatePicker /> */}
              <TextField
                autoFocus
                margin="dense"
                id="type"
                label="type"
                type="text"
                fullWidth
                variant="standard"
                  />
                  
                      <TextField
                          autoFocus
                margin="dense"
                id="designationDescription"
                label="Description"
                type="text"
                fullWidth
                variant="standard" />
                  <label className='mt-3 mb-2'>Upload Certificate</label>
                  <FileUploader />
                  <DialogActions className='mt-4'>
            <Button variant="outlined" onClick={handleEditClose}>
              Cancel
            </Button>
            <Button variant="contained" color="success" onClick={handleEdit}>
              Save
            </Button>
          </DialogActions>
        </Box>
        {/* </Box> */}
      </Modal>
      <DeleteIcon style={{fill:"#686868",cursor:"pointer"}} onClick={handleDeleteOpen} />
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
              <Button variant="contained" color="error" onClick={handleDelete}>
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
      <h6>
        MERN Stack Developer <span>[FullTime]</span>
      </h6>
      <p>June 2021- july 2024</p>
      <p className="mt-2">
        Hello Everyone, I am an web developer, coding and Tech enthusiast with
        skills in front-end and back-end development. Proficient in multiple
        programming languages and experienced in creating responsive and
        user-friendly websites. Continuously learning and expanding my knowledge
        in the field.
          </p>
          
    </>
  );
}

export default ProfileExperience;
