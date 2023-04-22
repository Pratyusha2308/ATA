import React, { useEffect, useState } from "react";
import AdminService from "../Service/Adminservice";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
  const [user,setUserId]=useState();
  const [password, setpassword] = useState();
  const [submit, setsubmit] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    if (submit) {
      AdminService.getLogin(user, password).then((res) => {
        // alert(res);
        if (res === true) {
          AdminService.getusrById(user).then((res) => {
            if (res.userType === "C") {
              nav(`/booking/${user}`);
            } else if (res.userType === "A") {
              nav(`/routeList`);
            }
          });
        } else if (res === false) {
          alert("Sign up first");
          setsubmit(false);
          alert("Sign up first");
          nav(`/profileadd`);
        }
      });
    }
  }, [submit, user, password, nav]);

  // useEffect(() => {

  // }, [])

  const handleuser = (e) => {
    setUserId(e.target.value);
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    // setsubmit(true);

    //Add Vechicle
    if(user==='AD-001' && password==='AD-001'){
      nav('/addvehicle')
  }
  else if(user==='AD-002' && password==='AD-002'){
      nav('/addvehicle')
  }
  else if(user==='AD-003' && password==='AD-003'){
      nav('/vehiclelist')
  }
  else if(user==='AD-004' && password==='AD-004'){
      nav('/addvehicle')
  }

  //Route
  else if(user==='AD-005' && password==='AD-005'){
      nav('/createroute')
  } 
  else if(user==='AD-006' && password==='AD-006'){
      nav('/createroute')
  } else if(user==='AD-007' && password==='AD-007'){
      nav('/routeList')
  } else if(user==='AD-008' && password==='AD-008'){
      nav('/createroute')
  } 

  //Driver
  
  else if(user==='AD-009' && password==='AD-009'){
      nav('/adddriver')
  } 
  else if(user==='AD-010' && password==='AD-010'){
      nav('/driverlist')
  }
  else if(user==='AD-011' && password==='AD-011'){
      nav('/driverlist')
  }
  else if(user==='AD-012' && password==='AD-012'){
      nav('/driverlist')
  }

  //User Profile
  
  else if(user==='US-001' && password==='US-001'){
      nav('/addprofile')
  }
  else if(user==='US-002' && password==='US-002'){
      nav('/viewreservation')
  }
  else if(user==='US-003' && password==='US-003'){
      nav('/addprofile')
  }
  else if(user==='US-004' && password==='US-004'){
      nav('/booking')
  }
  else{
      alert('Hey enter a ID and Password');
  }

  };
  return (
    <div>
      <form onSubmit={handlesubmit} className="form">
      <div className="wrapper"><h2>Login</h2>
      <div className="input-group">
        {/* <label>UserName</label> */}
        <input type="text" placeholder="UserName" onChange={handleuser} />
        {/* <label>Password</label> */}
        <input type="password" placeholder="Password" onChange={handlepassword} />
        </div>
        <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
