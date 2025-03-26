import React, { useState } from "react";
import ProfileTemplate from "../../components/profileTemplate";
import MsgManager from "../../components/msgManager";
import ReplyManager from "../../components/replyManager";
import {Grid2} from '@mui/material';


import "./employeeProfile.css"

const EmployeeProfile = () => {

      const [patientData, setPatientData] = useState({
        name: "",
        email: "",
        dob: "",
        sex: "",
        address: "",
        phone: "",
        lastExamDate: "",
        usesCorrectiveLenses: "",
        usesContacts: "",
        lensesPrescription: "",
        contactsPrescription: "",
        lastPrescriptionDate: "",
        healthConcerns: "",
        otherConcerns: "",
        conditions: "",
        otherConditions: "",
        hadSurgery: "",
        surgeries: "",
        otherSurgeries: "",
        allergies: "",
        additionalDetails: "",
      });
    
      const [isEditing, setIsEditing] = useState(false);
    
      const [messager, setMessager] = useState(false);

      const toggleMessager = () => {
        setMessager(!messager)
        console.log(messager)
      }

      const handleChange = (e) => {
        setPatientData({ ...patientData, [e.target.name]: e.target.value });
      };

      const [ message, setMessage] = useState("null");
      const msgPasser = (m) => {
        setMessage(m);
      }

    return(

      // {messager && (

      <div>

        
       {!messager && ( <ProfileTemplate
      /* Left Sidebar (Patient Information) */
      
      sidebarContent={
        <div className="cont">
          <img className="rounded" src="/Images/dog-secretary.webp" alt="A pic of John Doe, a white dog" width="300"></img>
          <h2 className="section-title">John Doe</h2>
          <h5 className="job"> Employee: Secretary</h5>
          <h5 ><b>About Me:</b></h5>
          <p className="bio">...Arf!</p>

        </div>
      }

      /* Center Section (Medical Form Data) */
      mainContent={
        <div>
            
          <h2 className="section-title">Inbox</h2>
          <MsgManager
          bool={toggleMessager}
          pass={msgPasser}
          />

         
          
        </div>
      }

      /* Right Section (Extra Content, Placeholder for Now) */
      extraContent={
        <div className="cont">
        <Grid2
            container
            spacing={10}
            direction="column"
            //alignItems="center"
            justifyContent="center"
        >
        <h2 className="section-title"> Schedule </h2>
        <p style={{ color: "#aaa", fontStyle: "italic" }}></p>
        <h2 className="section-title"> Inventory </h2>
        </Grid2>
        </div>
      }
    />

  )}

  {messager && (

    <ReplyManager
    mes = {message}
    />

    
  )}
    </div>
    

    );

};

export default EmployeeProfile;