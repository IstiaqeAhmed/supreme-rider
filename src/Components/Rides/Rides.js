import React, { useContext } from "react";
import Header from "../Header/Header";
import { UserContext } from "../../App";
import Bike from "../Map/Bike";
import { useLocation, useParams } from "react-router-dom";
import Bus from "../Map/Bus";
import Car from "../Map/Car";
import rides from "../FakeData/rides";
import RideDetails from "../RideDetails/RideDetails";
import Metro from "../Map/Metro";

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
          <div className="col-md-4">
            <h5
              style={{
                color: "white",
                backgroundColor: "orange",
                borderRadius: "10px",
              }}
            >
              <li>Mirpur1</li> <br /> <li>Dhanmodi</li>
            </h5>
            <h5>Stay in {placeName}</h5>
            {rides.map((ride) => (
              <RideDetails ride={ride}></RideDetails>
            ))}
          </div>

          {/* Map for last page */}
          <div className="col-md-8">
            <h2 style={{ color: "blue" }}> Map is below</h2>
            <Bike></Bike>
            <Bus> </Bus>
            <Car> </Car>
            <Metro></Metro>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rides;
