import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";
import PropTypes from "prop-types";
const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: -0.1055385, lng: -78.4719032 }}
      onClick={props.onClick}
    >
      {props.children}
    </GoogleMap>
  ))
);

const Map = ({ marker, position, getPosition }) => {
  return (
    <MyMapComponent
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `60vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      onClick={(e) => getPosition(e)}
    >
      <Marker
        ref={marker}
        position={{ lat: position.lat, lng: position.lng }}
      />
    </MyMapComponent>
  );
};

// eslint-disable-next-line react/no-typos
Map.PropTypes = {
  marker: PropTypes.any.isRequired,
  position: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
};

export { Map };
