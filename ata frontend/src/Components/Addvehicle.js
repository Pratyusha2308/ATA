import React, { useEffect, useState } from "react";
import AdminService from "../Service/Adminservice";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Addvehicle() {
  const navigate = useNavigate();
  const vehicleID = window.location.pathname.split("/")[2];

  const [data, setdata] = useState({
    name: "",
    registrationNumber: "",
    seatingapacity: "",
    farePerKM: "",
    type: "",
  });
  useEffect(() => {
    if (vehicleID) {
      AdminService.getVehicelById(vehicleID).then((res) => {
        setdata({
          name: res.name,
          registrationNumber: res.registrationNumber,
          seatingapacity: res.seatingapacity,
          farePerKM: res.farePerKM,
          type: res.type,
          vehicleID: res.vehicleID,
        });
      });
    }
  }, [vehicleID]);

  const handlechange = (e) => {
    setdata({ ...data, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (vehicleID) {
      AdminService.putVehicle(data).then((res) => {
        alert("Vehicle is Updated");
        navigate("/vehiclelist");
      });
    } else {
      AdminService.postVehicle(data).then((res) => {
        alert("Vehicle is Added");
        navigate("/vehiclelist");
      });
    }
  };
  console.log(data);
  return (
    <div>
      <h1>{vehicleID ? "EditVehicle" : "AddVehicle"}</h1>
      <form onSubmit={handleSubmit} className="form">
      <div className="wrapper">
      <div className="input-group">
        {/* <label>Vehicle-Name</label> */}
        <input
        placeholder="Vehicle-Name"
        className="text"
          type="text"
          onChange={handlechange}
          id="name"
          required
          value={data.name}
        />
        <br />
        <br />
        {/* <label>Vehicle-Rg-No</label> */}
        <input
        className="text"
        placeholder="Vehicle-Rg-No"
          type="text"
          onChange={handlechange}
          id="registrationNumber"
          required
          value={data.registrationNumber}
        />
        <br />
        <br/>
        
        {/* <label>Vehicle-Capacity</label> */}
        <input
        className="text"
        placeholder="Vehicle-Capacity"
          type="text"
          onChange={handlechange}
          id="seatingapacity"
          required
          value={data.seatingapacity}
        />
        <br /> <br />
        {/* <label>Vehicle-Fare/Km</label> */}
        <input
        placeholder="Vehicle-Fare/Km"
        className="text"
          type="text"
          onChange={handlechange}
          id="farePerKM"
          required
          value={data.farePerKM}
        />
        <br /> <br />
        {/* <label>Vehicle-Type</label> */}
        <input
        className="text"
        placeholder="Vehicle-Type"
          type="text"
          onChange={handlechange}
          id="type"
          required
          value={data.type}
        />
        <br /> <br />
        </div>
        <button type="submit">Submit</button>
        </div>
      </form>
    
    </div>
  );
}

export default Addvehicle;
