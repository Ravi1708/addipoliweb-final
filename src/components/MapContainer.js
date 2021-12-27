import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";
import { Button, Form, Modal, Dropdown } from "react-bootstrap";

const containerStyle = {
  width: "400vw",
  height: "400vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MapContainer() {
  const [currentPosition, setCurrentPosition] = useState({});
  const [city, setcity] = useState();
  const [states, setstates] = useState();
  const [country, setcountry] = useState();
  const [address, setaddress] = useState();
  const [latitude, setlatitude] = useState();
  const [longitude, setlongitude] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //geocoding
  Geocode.setApiKey("AIzaSyCdIB4G6_XT06RkDrqF1IUZpuzRp0vWLr4");
  Geocode.setLanguage("en");
  Geocode.setRegion("es");
  Geocode.setLocationType("ROOFTOP");

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng });
    setlatitude(lat);
    setlongitude(lng);

    Geocode.fromLatLng(currentPosition.lat, currentPosition.lng).then(
      (response) => {
        const address = response.results[0].formatted_address;
        setaddress(address);
        let city, state, country;
        for (
          let i = 0;
          i < response.results[0].address_components.length;
          i++
        ) {
          for (
            let j = 0;
            j < response.results[0].address_components[i].types.length;
            j++
          ) {
            switch (response.results[0].address_components[i].types[j]) {
              case "locality":
                city = response.results[0].address_components[i].long_name;
                setcity(city);
                break;
              case "administrative_area_level_1":
                state = response.results[0].address_components[i].long_name;
                setstates(state);
                break;
              case "country":
                country = response.results[0].address_components[i].long_name;
                setcountry(country);
                break;
            }
          }
        }
      },
      (error) => {
        console.error(error);
      }
    );
  };

  // Get latitude & longitude from address.

  const getltlnfromadd = () => {
    Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setCurrentPosition({ lat, lng });
        setlatitude(lat);
        setlongitude(lng);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const mapStyles = {
    height: "50vh",
    width: "20vw",
  };

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  return (
    <>
      <button
        onClick={handleShow}
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <Modal show={show} animation={false} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <h5 style={{ margin: "0px" }}>Select your Nearest Store</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoadScript googleMapsApiKey="AIzaSyAOujeMycUY71Is3IopYHOzvYDaEBYZ1jI">
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={currentPosition}
            >
              {currentPosition.lat ? (
                <Marker
                  position={currentPosition}
                  onDragEnd={(e) => onMarkerDragEnd(e)}
                  draggable={true}
                />
              ) : null}
            </GoogleMap>
          </LoadScript>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button> */}
          <Button
            variant="btn btn-primary-gold btn-popup"
            onClick={handleClose}
          >
            Sumbit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <div
        class="modal"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <LoadScript googleMapsApiKey="AIzaSyAOujeMycUY71Is3IopYHOzvYDaEBYZ1jI">
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={13}
                  center={currentPosition}
                >
                  {currentPosition.lat ? (
                    <Marker
                      position={currentPosition}
                      onDragEnd={(e) => onMarkerDragEnd(e)}
                      draggable={true}
                    />
                  ) : null}
                </GoogleMap>
              </LoadScript>
            </div>
            <div>
              <form style={{ display: "flex", flexDirection: "column" }}>
                <input
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                />
                <input value={city} onChange={(e) => setcity(e.target.value)} />
                <input
                  value={states}
                  onChange={(e) => setstates(e.target.value)}
                />
                <input
                  value={country}
                  onChange={(e) => setcountry(e.target.value)}
                />
              </form>
            </div>
            <button onClick={getltlnfromadd}>search</button>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Saves
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default MapContainer;
