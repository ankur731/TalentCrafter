import "./App.css";
import Dashboard from "./components/seeker/dashboard/Dashboard";
import Navbar from "./components/seeker/dashboard/Navbar";
// import ResponsiveAppBar from './components/seeker/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  navigate,
  Navigate,
} from "react-router-dom";
import Job from "./components/seeker/job/Job";
import { ToastContainer, toast } from "react-toastify";
import Profile from "./components/seeker/profile/Profile";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Login from "./components/ui/Login";
import Signup from "./components/ui/Signup";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  return (
      <Router>
        <Routes>
          <Route
            exact
            path="/login"
            element={
              user ? (
                <>
                  <Navigate to="/jobs" />
                </>
              ) : (
                <Login />
              )
            }
          ></Route>
          <Route
            exact
            path="/signup"
            element={
              user ? (
                <>
                  <Navigate to="/jobs" />
                </>
              ) : (
                <Signup />
              )
            }
          ></Route>
          <Route
            exact
            path="/jobs"
            element={
              user ? (
                <>
                  <Navbar />
                  <Dashboard />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          ></Route>

          <Route
            exact
            path="/jobs/:id"
            element={
              user ? (
                <>
                  <Navbar />
                  <Job />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          ></Route>

          <Route
            exact
            path="/jobs/:id/apply"
            element={
              user ? (
                <>
                  <Navbar />
                  <Job />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          ></Route>
          <Route
            exact
            path="/"
            element={
              
                <Navigate to="/login" />
            }
          ></Route>

          <Route
            exact
            path="/profile"
            element={
              user ? (
                <>
                  <Navbar />
                  <Profile />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          ></Route>
        </Routes>
        <ToastContainer />
      </Router>
  );
}

export default App;
