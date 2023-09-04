import "../Components/styles.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Graph from "../Components/Graph";

const Patient = () => {
  const [isCalled, setIsCalled] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);
  const [RXD_out, setRXD] = useState([]);
  const [RXA_out, setRXA] = useState([]);
  const [RXS_out, setRXS] = useState([]);
  const [fdep_out, setfdep] = useState("");
  const [fstress_out, setfstress] = useState("");
  const [fanx_out, setfanx] = useState("");
  const [Msco_out, setMsco] = useState("");
  const [ses_out, setses] = useState("");
  const [formData, setFormData] = useState({
    UR: "",
    age: "",
    gender: "",
    depressionLevel: "",
    stressLevel: "",
    anxietyLevel: "",
    rmtPercentage: "",
    madscore: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAPICall = async () => {
    // Here, you can use the formData object for your API call logic
    // Example: Make an API call with formData

    console.log(formData);
    const modelURL = `https://new-model-api-production.up.railway.app/getdata?age=${formData.age}&rmt=${formData.rmtPercentage}&dep=${formData.depressionLevel}&stress=${formData.stressLevel}&anx=${formData.anxietyLevel}`; // testing URl
    // const modelURL = `http://127.0.0.1:5000/getdata?age=${formData.age}&rmt=${formData.rmtPercentage}&dep=${formData.depressionLevel}&stress=${formData.stressLevel}&anx=${formData.anxietyLevel}`; // testing URl
    await axios
      .get(
        modelURL,
        (Headers = {
          "Access-Control-Allow-Origin": "*",
        })
      )
      .then(async (response) => {
        console.log("Get request successful:", response.data);
        // modelOutput["RX"] = response.data["RX"];
        // modelOutput["final_depression"] = response.data["final_depression"];
        // modelOutput["no_of_session"] = response.data["no_of_session"];
        // console.log("second call to model", modelOutput);

        setRXD(response.data.RXD);
        setRXA(response.data.RXA);
        setRXS(response.data.RXS);
        setfdep(response.data.finald);
        setfstress(response.data.finals);
        setfanx(response.data.finala);
        setses(response.data.no_of_session);
        setMsco(response.data.MADRS);

        setDataFetched(true);
        // Reset the form after successful submission
      })
      .catch((error) => {
        console.error("Error Getting data:", error);
      });
    setIsCalled(true);
  };

  const handleBack = () => {
    setIsCalled(false);
    setDataFetched(false);
  };

  return (
    <div className="container">
      {isCalled ? (
        <div className="leftDiv out">
          <div className="hero-outdiv">
            <h1 className="title2">
              Your Predicted <br></br> Outcome
            </h1>
            <h3 className=" hero-text2">UR : {formData.UR}</h3>
            <h3 className=" hero-text2">Age : {formData.age}</h3>
            <h3 className=" hero-text2">Gender : {formData.gender}</h3>
            <h3 className=" hero-text2">RMT% : {formData.rmtPercentage}</h3>
            <h3 className=" hero-text2">RX#0 Depression : {formData.depressionLevel}</h3>
            <h3 className=" hero-text2">RX#0 Stress : {formData.stressLevel}</h3>
            <h3 className=" hero-text2">RX#0 Anxiety : {formData.anxietyLevel}</h3>
            <h3 className=" hero-text2">
              RX#{ses_out} Anxiety : {fanx_out}
            </h3>
            <h3 className=" hero-text2">
              RX#{ses_out} Stress : {fstress_out}
            </h3>
            <h3 className=" hero-text2">
              RX#{ses_out} Depression : {fdep_out}
            </h3>
            <h3 className=" hero-text2">MADRS Score : {Msco_out}</h3>
            <h3 className=" hero-text2">No of Sessions : {ses_out}</h3>
          </div>
        </div>
      ) : (
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
              We’re here to help with inpatient and day therapy treatment
              options to help you or a loved one with their mental health
              recovery.
            </h2>
          </div>
        </div>
      )}

      {isCalled ? (
        <div className="chartDiv">
          {dataFetched ? (
            <Graph
              RXA={RXA_out}
              RXS={RXS_out}
              RXD={RXD_out}
              len={ses_out}
              madin={formData.madscore}
              madout={Msco_out}
            />
          ) : (
            <p>Data is not available for the graph.</p>
          )}
          <button className="button-292" onClick={handleBack}>
            <span>Back</span>
          </button>
        </div>
      ) : (
        <div className="rightDiv">
          <div className="card2">
            <h1 className="title2">Enter the following Details</h1>

            <div className="makeinputcol">
              <div className="inputGroup2  ">
                <label htmlFor="age">UR :</label>
                <input
                  type="text"
                  placeholder="Enter UR"
                  id="UR"
                  name="UR"
                  value={formData.UR}
                  onChange={handleChange}
                  style={{ marginLeft: "90px" }}
                />
              </div>

              <div className="inputGroup2 ">
                <label htmlFor="age">Age :</label>
                <input
                  type="text"
                  placeholder="Enter Age"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  style={{ marginLeft: "88px" }}
                />
              </div>
              <div className="inputGroup2 ">
                <label htmlFor="gender">Gender :</label>
                <input
                  type="text"
                  placeholder="Enter Gender"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  style={{ marginLeft: "70px" }}
                />
              </div>
              <div className="inputGroup2  ">
                <label htmlFor="depressionLevel">RX#0 Depression :</label>
                <input
                  type="text"
                  placeholder="Enter Depression Level"
                  id="depressionLevel"
                  name="depressionLevel"
                  value={formData.depressionLevel}
                  onChange={handleChange}
                  style={{ marginLeft: "10px" }}
                />
              </div>
              <div className="inputGroup2 ">
                <label htmlFor="stressLevel">RX#0 Stress:</label>
                <input
                  type="text"
                  placeholder="Enter Stress Level"
                  id="stressLevel"
                  name="stressLevel"
                  value={formData.stressLevel}
                  onChange={handleChange}
                  style={{ marginLeft: "45px" }}
                />
              </div>
              <div className="inputGroup2 ">
                <label htmlFor="anxietyLevel">RX#0 Anxiety :</label>
                <input
                  type="text"
                  placeholder="Enter Anxiety Level"
                  id="anxietyLevel"
                  name="anxietyLevel"
                  value={formData.anxietyLevel}
                  onChange={handleChange}
                />
              </div>
              <div className="inputGroup2  ">
                <label htmlFor="rmtPercentage">RMT % :</label>
                <input
                  type="text"
                  placeholder="Enter RMT Percentage"
                  id="rmtPercentage"
                  name="rmtPercentage"
                  value={formData.rmtPercentage}
                  onChange={handleChange}
                  style={{ marginLeft: "70px" }}
                />
              </div>
              <div className="inputGroup2  ">
                <label htmlFor="madscore">MADRAS Score % :</label>
                <input
                  type="text"
                  placeholder="Enter MADRAS SCORE"
                  id="madscore"
                  name="madscore"
                  value={formData.madscore}
                  onChange={handleChange}
                  style={{ marginLeft: "10px" }}
                />
              </div>
            </div>

            <button className="button-292" onClick={handleAPICall}>
              <span>Submit</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Patient;
