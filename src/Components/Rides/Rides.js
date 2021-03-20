import React, { useContext } from "react";
import Header from "../Header/Header";
import { UserContext } from "../../App";
import Bike from "../Map/Bike";
import { useLocation, useParams } from "react-router-dom";
import Bus from "../Map/Bus";
import Car from "../Map/Car";
import rides from "../FakeData/rides";
import RideDetails from "../RideDetails/RideDetails";

const Rides = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { placeName } = useParams();
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <div>
        <Header></Header>
        <h1 style={{ textAlign: "center", color: "black" }}>
          Welcome, {loggedInUser.name}{" "}
          <h3 style={{ color: "grey" }}>
            Thank you for choosing Supreme-rider
          </h3>{" "}
          <h4 style={{ color: "grey" }}>
            Please select your ride and safe journey.
          </h4>{" "}
        </h1>
        <div className="row" style={{ paddingTop: "50px" }}>
          <div className="col-md-6">
            <h5 style={{ color: "lightGrey" }}>20 stays mar 13-17 3 guest</h5>
            <h5>Stay in {placeName}</h5>
            {rides.map((ride) => (
              <RideDetails ride={ride}></RideDetails>
            ))}
          </div>

          {/* Map for last page */}
          <div className="col-md-6">
            <h2 style={{ textAlign: "center" }}>{placeName} map is below</h2>
            {location.pathname === "/rides/Car" && <Car></Car>}
            {location.pathname === "/rides/Bike" && <Bike></Bike>}
            {location.pathname === "/rides/Bus" && <Bus></Bus>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rides;
