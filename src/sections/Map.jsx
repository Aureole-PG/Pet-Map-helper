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
    <div style={{ position: "relative" }}>
      <div className="fixed-actions">
        <div className="container">
          <div class="card-panel hoverable">
            <div className="row no-margin height-100">
              <div className="col s6 m6 l4 height-100">
                <div className="height-100 align-center">
                  <div>
                    <h6>Name: </h6>
                    <p className="title" style={{ margin: "0 10px" }}>
                      Name
                    </p>
                  </div>
                </div>
              </div>
              <div className="col s6 m6 l4">
                <h6>Owner </h6>
                <p className="title" style={{ margin: "0 10px" }}>
                  Name
                </p>
              </div>
              <div className="col s12 m6 l4 hide-on-med-and-down">
                <h6>position </h6>
                <div className="align-center">
                  <p className="subtitle">lat: </p>
                  <div class="chip no-margin">{position.lat}</div>
                </div>
                <div className="align-center">
                  <p className="subtitle">lng: </p>
                  <div class="chip no-margin">{position.lng}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </div>
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
