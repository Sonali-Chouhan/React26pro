import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const GoogleMap = (props) => {
  return (
    <>
      <Map
        google={props.google}
        style={{ with: "100%", height: "100%" }}
        zoom={10}
        initialCenter={{
          lat: 22.719568,
          lng: 75.857727,
        }}
      />
    </>
  );
};
export default GoogleApiWrapper({
  apiKey: " AIzaSyDLGGDJqqMhQNMDD8OrxLgWvzBr8yw_vhM",
})(GoogleMap)