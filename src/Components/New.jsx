import "./styles.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
const New = () => {

  const [Patient,setPatientId] = useState("")
  const handlePatientID = (e) =>{
    setPatientId(e.target.value);

  }
  const handleSubmit = () => {
    // event.preventDefault();
    console.log(Patient);
    let arg = Patient;
    const apiURL = `https://us-east-1.aws.data.mongodb-api.com/app/application-0-erzts/endpoint/find?arg1=${arg}`;

    axios
      .get(apiURL)
      .then((response) => {
        console.log("Get request successful:", response.data);
        // Reset the form after successful submission
      })
      .catch((error) => {
        console.error("Error Getting data:", error);
      });

      
  };

  return (
    <div className="container">
      <div className="leftDiv">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="hero-div2">
          <h1 className="hero-title2">
            Your Mental <br></br> Health Matters
          </h1>
          <h3 className=" hero-text2">Rediscover Happiness</h3>
          <h2 className="hero-desc2">
            At Belmont Private Hospital, we proudly provide evidence-based
            mental health treatment delivered by an experienced team of
            healthcare professionals. <br />
            We’re here to help with inpatient and day therapy treatment options
            to help you or a loved one with their mental health recovery.
          </h2>

          {/* <Link to="/test" className="hero-button">
            <p className="mr-2">Get Started</p>
            <i className="fa-solid fa-arrow-right "></i>
          </Link> */}
        </div>
      </div>
      <div className="rightDiv">
        <div className="card2">
          <h1 className="title2">Enter the following Details</h1>
          <div className="inputGroup2">
            <label for="PatientID">Patient ID :</label>
            <input type="text" placeholder="Enter Patient ID" id="PatientID" onChange={(e)=>handlePatientID(e)}/>
          </div>

          <button className="button-292" onClick={handleSubmit}>
            <span>Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default New;
