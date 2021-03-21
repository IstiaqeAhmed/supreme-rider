import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 24.098379,
  lng: 90.328712,
};

function Metro() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCJWJD4BmH7_2riiy2BvS2OlTs6Eu6pPxE">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Metro);
