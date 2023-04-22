import React, { useState } from "react";
import CustomerService from "./Service/Customerservice";
import { useNavigate } from "react-router-dom";

function Addprofile() {
  const navigate = useNavigate();
  const [profile, setprofile] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    street: "",
    location: "",
    city: "",
    state: "",
    pincode: "",
    mobileNo: "",
    emailID: "",
    password: "",
    credentialBean: {
      userId: "",
      password: "",
      userType: "C",
      loginStatus: "True",
    },
  });

  const handlechange = (e) => {
    setprofile({ ...profile, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    CustomerService.Addprofile(profile).then((res) => {
      alert("Profile is added");
      navigate("/");
    });
  };
  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit} className="form">
        
      <div className="wrapper">
        <label>First Name</label>
        <input id="firstName" onChange={handlechange} required /><br/>
        <label>last Name</label>
        <input id="lastName" onChange={handlechange} required /><br/>
        <label>Date of Birth</label>
        <input id="dateOfBirth" onChange={handlechange} required /><br/>
        <label>Gender</label>
        <input id="gender" onChange={handlechange} required /><br/>
        <label>Street</label>
        <input id="street" onChange={handlechange} required /><br/>
        <label>Location</label>
        <input id="location" onChange={handlechange} required /><br/>
        <label>City</label>
        <input id="city" onChange={handlechange} required /><br/>
        <label>State</label>
        <input id="state" onChange={handlechange} required /><br/>
        <label>Pincode</label>
        <input id="pincode" onChange={handlechange} required /><br/>
        <label>Mobile No</label>
        <input id="mobileNo" onChange={handlechange} required /><br/>
        <label>Email-ID</label>
        <input id="emailID" type="email" onChange={handlechange} required /><br/>
       
        
        <label>UserName</label>
        <input
          id="userId"
          onChange={(e) => {
            setprofile({
              ...profile,
              credentialBean: {
                ...profile.credentialBean,
                [e.target.id]: e.target.value,
              },
            });
          }}
          required
        />
        <label>Password</label>
        <input
          id="password"
          onChange={(e) => {
            setprofile({
              ...profile,
              credentialBean: {
                ...profile.credentialBean,
                [e.target.id]: e.target.value,
              },
            });
          }}
          required
        /><br/>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Addprofile;
