import React, { useState } from "react";
import "./Login.css";
import axios from 'axios';
import { useNavigate } from "react-router";
import { useAuthContext } from '../../hooks/useAuthContext';

function Login() {

    const navigate = useNavigate();
    const { dispatch } = useAuthContext()
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
    
  const sendToSignup = () => {
    navigate("/signup")
}


  const handleInputChange = (event) => {
    /* event.persist(); NO LONGER USED IN v.17*/
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    

  const handleSubmit = async(e) => {
    e.preventDefault();
    if ( values.email && values.password) {
      setValid(true);
      }
      
      setSubmitted(true);

      try {
          const response = await axios.post('https://talentcrafterbackend.onrender.com/login', values); // Replace with your API endpoint
          
          
          if (response.status == 201) {
            localStorage.setItem('user', JSON.stringify(response))
          dispatch({type:'LOGIN', payload:response})
         navigate("/jobs")
     }
        // console.log('Data sent to the server:', response.data);
      } catch (error) {
          console.error('Error sending data:', error);
          setError(error);
      }
      
  };

  return (
    <div className="main">
      <div className="form-container">
        <h4>Talent Crafter</h4>
        <form className="register-form" onSubmit={handleSubmit}>

          {!valid && (
            <input
              class="form-field"
              type="email"
              placeholder="Email"
              name="email"
              required
              value={values.email}
              onChange={handleInputChange}
            />
          )}

          {submitted && !values.email && (
            <span id="email-error">Please enter an email address</span>
          )}

          {!valid && (
            <input
              class="form-field"
              type="password"
              placeholder="password"
              name="password"
              required
              value={values.password}
              onChange={handleInputChange}
            />
          )}

          {/* {submitted &&  !values.password(
              <span id="last-name-error">Please enter a last name</span>
            )} */}

          {!valid && (
            <button class="form-field" type="submit">
              Register
            </button>
          )}
              </form>
              <p>Not registered ?<span onClick={sendToSignup}> Signup</span></p>
      </div>
    </div>
  );
}

export default Login;
