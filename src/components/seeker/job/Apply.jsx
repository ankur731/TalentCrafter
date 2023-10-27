import React, { useEffect, useState } from "react";
import "./Apply.css";
import { FileUploader } from "react-drag-drop-files";


const fileTypes = ["JPEG", "PNG", "GIF"];

function Apply() {
  const [file, setFile] = useState(null);
  

  const handleChange = (file) => {
    setFile(file);
  };
  
  const sendToJob = () => {
    // console.log(id);
    window.history.back();
  };
 

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-11">
          <div className="row">
            <div className="col-8 apply-div ">
              <h4>Application Details</h4>
              <div className="col-12 mt-4">
                <label className="col-12 application-label" htmlFor="cover">
                  Cover Letter
                </label>
                <textarea
                  className="col-12 mt-1 application-input"
                  id="cover"
                ></textarea>
              </div>
              <div className="col-12 mt-4">
                <label className="col-12 application-label" htmlFor="cover">
                  If hired, when will you be able to deliver an implementation?
                </label>
                <textarea
                  className="col-12 mt-1 application-input"
                  id="cover"
                ></textarea>
              </div>
              <div className="col-12 mt-4">
                <label className="col-12 application-label" htmlFor="cover">
                  Are you able to implement and test a responsive design that
                  looks good on phone, tablet, and desktop?
                </label>
                <textarea
                  className="col-12 mt-1 application-input"
                  id="cover"
                ></textarea>
              </div>
              <div className="col-12 mt-4">
                <label
                  className="col-12 mb-1 application-label"
                  htmlFor="cover"
                >
                  Attachment
                </label>
                <FileUploader
                  multiple={true}
                  handleChange={handleChange}
                  name="file"
                                  maxSize={25}
                                  className="dnd col-12"
                  types={fileTypes}
                />
              </div>
              <div className="job-bottom mt-4">
                <button className="apply-btn">Submit</button>
                <button className="save-job-btn" onClick={sendToJob}>
                  Cancel
                </button>
              </div>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
        {/* <div className="col-3"></div> */}
      </div>
    </div>
  );
}

export default Apply;
