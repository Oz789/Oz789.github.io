import "./login.css";
import UserNavBar from "../../components/homeNavBar";
import { fontFamily } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = async () => {
    console.log("Sending login for:", email, password);

    try {const res = await fetch("http://localhost:5001/api/login/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        const data = await res.json();
  
        if (data.role === "admin") {
          return navigate("/admin-dashboard");
        } else if (data.role === "doctor") {
          const doctorID = data.doctorInfo.doctorID;
          return navigate(`/doctorProfile/${doctorID}`);
        } else if (data.role === "employee") {
          return navigate("/employeeProfile");
        }
      }

      const resPatient = await fetch("http://localhost:5001/api/login/patient", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (resPatient.ok) {
        const data = await resPatient.json();
        if (data.role === "patient") {
          const patientID = data.user.patientID;
          return navigate(`/userProfile/${patientID}`);
        }
      }

      alert("Invalid credentials");
      
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed.");
    }
  };


  
  return (
    <>
      <UserNavBar />
      <div className="login-container">
        <div className="login-box">
          <h2>Login Portal</h2>
          <div className="input-row">
            <p>Email</p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-row">
            <p>Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="login-button"
            style={{ fontFamily: "Bell MT", fontSize: "12pt" }}
            onClick={handleLogin}
          >
            Log in
          </button>
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
          <p className="forgot-password">
            Forgot Password? <a href="/signup">Reset Password</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
