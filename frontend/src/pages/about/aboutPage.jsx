/*import React from "react";
import HomeNavBar from "../../components/homeNavBar";

const AboutP = () => {
  return (
    <>
      <HomeNavBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-6xl bg-white rounded-2xl shadow-lg p-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            About Our Eye Clinic
          </h1>
          <p className="text-lg text-gray-600 mb-10 text-center">
            At Clear Vision Eye Clinic, our mission is to provide top-quality eye care with cutting-edge technology.
            Our team of experienced specialists is dedicated to ensuring your vision stays sharp and healthy.
          </p>

          {
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Clinic Locations</h2>
              <div className="text-gray-600 mb-6">
                <h3 className="font-bold">Adult Ophthalmology</h3>
                <p>6400 Fannin Street<br />18th Floor<br />Houston, Texas 77030</p>
                <p>Office: (713) 486-9400<br />Fax: (713) 486-9592</p>

                <h3 className="font-bold mt-4">Pediatric Ophthalmology</h3>
                <p>6400 Fannin Street, Suite 1980<br />19th Floor<br />Houston, Texas 77030</p>
                <p>Office: (713) 486-9400<br />Fax: (713) 486-9593</p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Clinic Hours</h2>
              <p className="text-gray-600 mb-6">8 a.m.–5 p.m., Monday–Friday</p>
              <p className="text-gray-600">Physician on call 24 hours a day, 7 days a week</p>

              <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">Parking</h2>
              <p className="text-gray-600 mb-6">On-site parking available from Main or Fannin streets</p>
            </div>

          
            <div className="flex justify-center">
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.777467869965!2d-95.39773908491582!3d29.707915382001396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0e5f0b3f6f9%3A0x9e3a1f0bbebc64ae!2s6400%20Fannin%20St%2C%20Houston%2C%20TX%2077030%2C%20USA!5e0!3m2!1sen!2sus!4v1614957424960!5m2!1sen!2sus"
                width="25%"
                height="350"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

        
          <h2 className="text-2xl font-semibold text-gray-700 mt-10 mb-4 text-center">
            Meet Our Specialists
          </h2>
          <ul className="text-gray-600 text-center space-y-2">
            <li><strong>Dr. Oz</strong> - Specialist</li>
            <li><strong>Dr. Mason</strong> - Optometrist</li>
            <li><strong>Dr. David</strong> - Retinal Surgeon</li>
            <li><strong>Dr. Matthew</strong> - Ophthalmologist</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutP;
*/
import React from "react";
//import HomeNavBar from "../../components/homeNavBar";
import UserNavbar from "../../components/navBar";
const AboutP = () => {
  return (
    <>
      <UserNavbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            About Our Eye Clinic
          </h1>
          <p className="text-gray-600 mb-8 text-center">
            At Clear Vision Eye Clinic, our mission is to provide top-quality eye care with cutting-edge technology.
            Our team of experienced specialists is dedicated to ensuring your vision stays sharp and healthy.
          </p>

          {/* Main Flex Container */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            {/* Left Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                Clinic Locations
              </h2>
              <div className="text-gray-600 mb-6">
                <h3 className="font-bold">Adult Ophthalmology</h3>
                <p>6400 Fannin Street<br />18th Floor<br />Houston, Texas 77030</p>
                <p>Office: (713) 486-9400<br />Fax: (713) 486-9592</p>

                <h3 className="font-bold mt-4">Pediatric Ophthalmology</h3>
                <p>6400 Fannin Street, Suite 1980<br />19th Floor<br />Houston, Texas 77030</p>
                <p>Office: (713) 486-9400<br />Fax: (713) 486-9593</p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-700 mb-3">Clinic Hours</h2>
              <p className="text-gray-600">8 a.m.–5 p.m., Monday–Friday</p>
              <p className="text-gray-600">Physician on call 24 hours a day, 7 days a week</p>

              <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">Parking</h2>
              <p className="text-gray-600">On-site parking available from Main or Fannin streets</p>
            </div>

            {/* Right Section - Map */}
            <div className="w-full md:w-1/2 flex justify-end">
             <iframe
                title="Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.777467869965!2d-95.39773908491582!3d29.707915382001396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0e5f0b3f6f9%3A0x9e3a1f0bbebc64ae!2s6400%20Fannin%20St%2C%20Houston%2C%20TX%2077030%2C%20USA!5e0!3m2!1sen!2sus!4v1614957424960!5m2!1sen!2sus"
                width="400"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Specialists Section */}
          <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-3 text-center">
            Meet Our Specialists
          </h2>
          <ul className="text-gray-600 text-center space-y-2">
            <li><strong>Dr. Oz</strong> - Specialist</li>
            <li><strong>Dr. Mason</strong> - Optometrist</li>
            <li><strong>Dr. David</strong> - Retinal Surgeon</li>
            <li><strong>Dr. Matthew</strong> - Ophthalmologist</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutP;