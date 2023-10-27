import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../../hooks/useAuthContext";

function Navbar() {
  const navigate = useNavigate();
    const { dispatch } = useAuthContext();
    const { user } = useAuthContext();

  const sendToHome = () => {
    navigate("/jobs");
  };
  const sendToProfile = () => {
    navigate("/profile");
  };
  const sendToLogin = () => {
    navigate("/login");
  };
  const sendToSignup = () => {
    navigate("/signup");
  };

  const logout = () => {
    localStorage.removeItem("user");

      dispatch({ type: "LOGOUT" });
      navigate("/login")
  };

  return (
    <div className="navbar">
      {/* <div className=''> */}
      <div className="row navbar-row">
        <div className="col-2 col-sm-3 d-flex justify-content-center">
          <h4 onClick={sendToHome}>TALENTCRAFTER</h4>
        </div>
        <div className="col-8 col-sm-6 middle-bar">
          <div className="middle-bar-tab">
            <h5 onClick={sendToHome}>Find Work</h5>
          </div>
          <div className="middle-bar-tab">
            <h5>Message</h5>
          </div>
          <div className="middle-bar-tab">
            <h5 onClick={sendToProfile}>My Profile</h5>
          </div>
          <div className="middle-bar-tab">
            <h5>Overview</h5>
          </div>
        </div>
        <div className="col-2 col-sm-3 d-flex justify-content-center">
          {!user ? (
            <div className="authBtn-bar">
              <button onClick={sendToLogin} className="authBtn">
                Login
              </button>
              <button onClick={sendToSignup} className="authBtn">
                Signup
              </button>
            </div>
          ) : (
            <div className="authBtn-bar">
              <p>{user.data?.email}</p>
              <button onClick={logout} className="authBtn">
                Logout
              </button>
            </div>
          )}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Navbar;
