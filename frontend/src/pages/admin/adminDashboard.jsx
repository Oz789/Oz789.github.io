import React, { useState } from "react";
import "./adminDashboard.css";
import UserNavbar from "../../components/navBar";



const AdminDashboard = ({ sidebarContent, mainContent, extraContent }) => {
  
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [specialization, setSpecialization] = useState("");


  const handleSubmit = async () => {
    if (!firstName || !lastName || !phone || !email || !password || !role) {
      alert("Please fill in all fields.");
      return;
    }

    if (role === "Doctor" && (!licenseNumber || !specialization)) {
      alert("Please fill in license number and specialization.");
      return;
    }
  
    const isAdmin = role === "Manager" ? 1 : 0;
  
    try {
      const res = await fetch("http://localhost:5001/api/employees/add-employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          isAdmin,
          firstName,
          lastName,
          role,
          phone,
          email,
          password,
        }),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        alert("Error: " + data.error);
        return;
      }

      if (role === "Doctor") {
        const doctorRes = await fetch("http://localhost:5001/api/doctor/add-doctor", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            employeeID: data.employeeID,
            licenseNumber,
            specialization,
          }),
        });

        const doctorData = await doctorRes.json();
        if (!doctorRes.ok) {
          alert("Error adding doctor: " + doctorData.error);
          return;
        }    console.log("Doctor added successfully:", doctorData);
      }
  
      alert("Employee added successfully!");
  

      setShowModal(false);
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong.");
    }
  };
  
  
  return (

    <>
      <UserNavbar />
      <div className="profile-container">
        <div className="profile-wrapper">

          <div className="profile-sidebar">
            {sidebarContent ? sidebarContent : <p style={{ color: "#aaa", fontStyle: "italic" }}></p>}
          </div>

          <div className="profile-content">
            {mainContent ? mainContent : <p style={{ color: "#aaa", fontStyle: "italic" }}></p>}
              {mainContent ? mainContent : (
            <button className="add-employee-button"  onClick={() => setShowModal(true)}> Add New Employee
              </button> )}

          </div>

          <div className="profile-extra">
            {extraContent ? extraContent : <p style={{ color: "#aaa", fontStyle: "italic" }}></p>}
          </div>
        </div>

          {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Add New Employee</h3>

              <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
              <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
              <input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
              <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

              <select value={role} onChange={e => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="Employee">Employee</option>
                <option value="Manager">Manager</option>
                <option value="Doctor">Doctor</option>
              </select>
              
              {role === "Doctor" && (
                <>
                  <input
                    type="text"
                    placeholder="License Number"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Specialization"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                  />
                </>
              )}
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        )}


      </div>
    </>
  );
};

export default AdminDashboard;