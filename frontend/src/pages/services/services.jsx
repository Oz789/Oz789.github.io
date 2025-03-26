import React from "react";
import UserNavbar from "../../components/navBar";
import { Card, CardContent, Typography } from "@mui/material";
import { Grid2 as Grid } from "@mui/material";
import "./services.css";

const services = [
  { title: "Comprehensive Eye Exams", image: "/images/exams.jpg", description: "" },
  { title: "Injury & Disease Treatment", image: "/images/injury.jpg", description: "" },
  { title: "Children's Eye Care", image: "/images/kids.jpg" ,description: "" },
  { title: "Contacts & Frames", image:"/images/frames copy.jpg", description: "" }
];

const Services = () => {
  return (
    <>
    <UserNavbar/>
    <div >
      <Typography className="services-text" variant="h2">
       
      </Typography> 
        <Grid container className="services-container" spacing={3} padding={3}>
        {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={3} key={index} className="service-item">
        <Card className="service-card">
            <img src={service.image} alt={service.title}  className={`service-image ${service.title === "Contacts & Frames" ? "frames-offset" : ""}`}/>
            < CardContent className="service-content">
                <Typography variant="h6" className="service-title">
                {service.title}
                </Typography>
                <Typography variant="body2" className="service-description">
                {service.description}
                </Typography>
            </CardContent>
        </Card>


        </Grid>
      ))}
    </Grid>
    </div>
    </>
  );
};

export default Services;