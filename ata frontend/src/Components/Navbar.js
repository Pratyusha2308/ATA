import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1>Sundaram Travel Agency</h1>
      <Link
            style={{
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "700",
              marginRight: "40px",
              border: "none",
              color: "rgba(0, 0, 0, 0.75)",
              padding: "5px 10px",
              borderRadius: "4px",
            }}
            to="/About"
          >
           About us 
          </Link>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "700",
              marginRight: "40px",
              border: "none",
              color: "rgba(0, 0, 0, 0.75)",
              padding: "5px 10px",
              borderRadius: "4px",
            }}
            to="/contact"
          >
            Contact us
          </Link>
      {/* <Link to="/routelist">Routes</Link>
      <Link to="/vehiclelist">Vehicles</Link>
      <Link to="/driverlist">Drivers</Link> */}
      {/* <Link to="/viewreservation">Reservations</Link> */}
    </div>
  );
}

export default Navbar;
