import React from "react";
import { useNavigate } from "react-router-dom";
import HomeNavBar from "../../components/homeNavBar";

import "./home.css";


const homeBackground = "/images/home.jpg";

const Home = () => {
const navigate = useNavigate();
  return (
<>
    <HomeNavBar/>
    <div 
      className="home-page"
      style={{
        backgroundImage: `url(${homeBackground})`, backgroundSize: "cover", backgroundPosition: "center",
      }}
    >
      <button onClick={() => navigate("/book-appointment")} className="home-button">Book Your Appointment</button>
      <a href="/log-in" className="employee-portal">Employee Portal</a>
    </div>
    </>
  );
};

export default Home;


