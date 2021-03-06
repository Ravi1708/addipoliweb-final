import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FormContainer } from "../components/FormContainer";
import {
  saveShippingAddress,
  createAddress,
  verifyAddress,
} from "../actions/cartActions";
import { CheckoutSteps } from "../components/CheckoutSteps";
import { getUserAddresses } from "../actions/userActions";
import Geocode from "react-geocode";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Alert from "@mui/material/Alert";

const CheckoutAddress = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userAddresses = useSelector((state) => state.userAddresses);
  const { loading, error, addresses } = userAddresses;

  const [showToast, setShowToast] = useState(false);

  const [name, setname] = useState(userInfo.userName);
  const [phoneNumber, setPhoneNumber] = useState(userInfo.phoneNumber);
  const [address, setaddress] = useState(shippingAddress.address);
  const [area, setArea] = useState(shippingAddress.area);
  const [pincode, setpincode] = useState(shippingAddress.pincode);
  const [landmark, setLandmark] = useState(shippingAddress.landmark);
  const [shortNote, setShortNote] = useState(shippingAddress.shortNote);
  const [states, setstates] = useState();
  const [country, setcountry] = useState();

  const [verifyaddError, setverifyaddError] = useState();

  const [city, setcity] = useState(shippingAddress.city);
  const [currentPosition, setCurrentPosition] = useState({
    lat: shippingAddress.lat,
    lng: shippingAddress.lon,
  });
  const [lat, setlatitude] = useState(shippingAddress.lat);
  const [lon, setlongitude] = useState(shippingAddress.lon);

  const [addressOptions, setaddressOptions] = useState("others");

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getUserAddresses());
  }, [dispatch]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "content-Type": "application/json",
          "x-access-token": `${userInfo.accessToken}`,
        },
      };
      const { data } = await axios.get(
        `https://api.addipoli-puttus.com/user/verify-address?lat=${lat}&lon=${lon}`,
        config
      );

      console.log(data);

      dispatch(
        saveShippingAddress({
          name,
          phoneNumber,
          address,
          area,
          pincode,
          city,
          country,
          states,
          landmark,
          addressOptions,
          lat,
          lon,
          hubId: data.hubId,
          distance: data.distance,
          hubs: "available",
        })
      );

      history.push("/checkout");
    } catch (error) {
      setverifyaddError(error.response.data.message);
    }
  };

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

    Geocode.fromLatLng(e.latLng.lat(), e.latLng.lng()).then(
      (response) => {
        const address = response.results[0].formatted_address;
        setaddress(address);
        let area, city, state, country, pincode;
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

              case "sublocality":
                area = response.results[0].address_components[i].long_name;
                setArea(area);
                break;
              case "administrative_area_level_1":
                state = response.results[0].address_components[i].long_name;
                setstates(state);
                break;
              case "postal_code":
                pincode = response.results[0].address_components[i].long_name;
                setpincode(pincode);
                break;
              case "country":
                country = response.results[0].address_components[i].long_name;
                setcountry(country);
                console.log(country);
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
        Geocode.fromLatLng(lat, lng).then(
          (response) => {
            const address = response.results[0].formatted_address;
            setaddress(address);
            let area, city, state, country, pincode;
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
                  case "sublocality":
                    area = response.results[0].address_components[i].long_name;
                    setArea(area);
                    break;
                  case "administrative_area_level_1":
                    state = response.results[0].address_components[i].long_name;
                    setstates(state);
                    break;
                  case "postal_code":
                    pincode =
                      response.results[0].address_components[i].long_name;
                    setpincode(pincode);
                    break;
                  case "country":
                    country =
                      response.results[0].address_components[i].long_name;
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
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  return (
    <div>
      {verifyaddError ==
        "No hubs are found near your area, Please try with another address or Order In" && (
        <Alert
          style={{
            position: "fixed",
            bottom: "10px",
            right: "10px",
            width: "350px",
            fontSize: "17px",
            display: showToast ? "unset" : "none",
          }}
          variant="filled"
          severity="error"
        >
          No Store available near by. Can't be delivered at your location.
        </Alert>
      )}
      <div className="wrapper">
        {/*<!-- Start Main -->*/}
        <main>
          <div className="main-part">
            {/*<!-- Start Breadcrumb Part -->*/}
            <section
              className="breadcrumb-part"
              data-stellar-offset-parent="true"
              data-stellar-background-ratio="0.5"
              style={{ backgroundImage: "url('assets/images/breadbg1.jpg')" }}
            >
              <div className="container">
                <div className="breadcrumb-inner">
                  <h2>Checkout</h2>
                  <a href="/index">Home</a>
                  <span>Checkout</span>
                </div>
              </div>
            </section>
            {/*<!-- End Breadcrumb Part -->*/}
            <section className="home-icon shop-cart bg-skeen">
              <div className="icon-default icon-skeen">
                <img src="assets/images/scroll-arrow.png" alt="image" />
              </div>
              <div className="container">
                <div
                  className="checkout-wrap checkout-wrap-more wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <ul className="checkout-bar">
                    <li className="done-proceed">Login</li>
                    <li className="active">Address</li>
                    <li>Shop Cart</li>
                    <li>Payment Method</li>
                    <li>Order Complete</li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <div
                      className="shop-checkout-left"
                      data-wow-duration="1000ms"
                      data-wow-delay="300ms"
                      style={{
                        marginTop: "10px",
                      }}
                    >
                      <h5>Manage Address</h5>
                      {addresses &&
                        addresses.map((address, index) => {
                          return (
                            <>
                              <div className="row">
                                <div className="col-12">
                                  <label
                                    className="form-check-label"
                                    for="delivery"
                                  >
                                    <strong>{address.name}</strong>
                                    <br />
                                    {address.address}
                                    <br />
                                    {address.area} {address.pincode}
                                    <br />
                                    {address.landmark}
                                    <br />
                                    Mobile Number -{address.phoneNumber}
                                  </label>
                                </div>
                                <div className="col-6">
                                  <a class="address-cart-btn" href="#">
                                    Edit
                                  </a>
                                </div>
                                <div className="col-6">
                                  <a
                                    class="address-cart-btn-end"
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      dispatch(
                                        saveShippingAddress({
                                          name: address.name,
                                          phoneNumber: address.phoneNumber,
                                          address: address.address,
                                          area: address.area,
                                          pincode: address.pincode,
                                          landmark: address.landmark,
                                          shortNote,
                                          addressOptions,
                                        })
                                      );
                                      history.push("/checkout");
                                    }}
                                  >
                                    Proceed
                                  </a>
                                </div>
                              </div>
                            </>
                          );
                        })}
                    </div>
                  </div>
                  <div
                    className="col-md-8 col-sm-12 col-xs-12 wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    <div className="shop-checkout-left">
                      <h5>Add New Address</h5>
                      <form
                        onSubmit={submitHandler}
                        className="form"
                        name="contact-form"
                      >
                        <div className="row">
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
                          <div className="col-md-12 col-sm-12  col-xs-12">
                            <input
                              value={address}
                              type="text"
                              onChange={(e) => setaddress(e.target.value)}
                              placeholder="Type here to search address"
                              style={{ width: "70%" }}
                            ></input>
                            <div
                              class="btn-primary-gold-address btn-medium"
                              onClick={getltlnfromadd}
                              style={{ width: "20%" }}
                            >
                              search
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <label className="label-contact">Name*</label>
                            <input
                              className="label-contact-input"
                              name=""
                              type="text"
                              value={name}
                              required
                              disabled
                            ></input>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <label className="label-contact">
                              Phone Number*
                            </label>
                            <input
                              className="label-contact-input"
                              name=""
                              value={phoneNumber}
                              type="text"
                              required
                              disabled
                            ></input>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <label className="label-contact">House No*</label>
                            <input
                              className="label-contact-input"
                              name={address}
                              type="text"
                              value={address}
                              onChange={(e) => setaddress(e.target.value)}
                              required
                            ></input>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <label className="label-contact">
                              Apartment / Road / Area*
                            </label>
                            <input
                              className="label-contact-input"
                              name=""
                              type="text"
                              value={area}
                              onChange={(e) => setArea(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <label className="label-contact">Pincode*</label>
                            <input
                              className="label-contact-input"
                              name=""
                              type="text"
                              value={pincode}
                              onChange={(e) => setpincode(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <label className="label-contact">
                              Near Landmark*
                            </label>
                            <input
                              className="label-contact-input"
                              name=""
                              type="text"
                              value={landmark}
                              onChange={(e) => setLandmark(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <label className="label-contact">Short Note</label>
                            <textarea
                              className="label-contact-input"
                              name="message"
                              value={shortNote}
                              onChange={(e) => setShortNote(e.target.value)}
                            />
                          </div>
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="delivery-type">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="delivery"
                                  value="home"
                                  onChange={(e) =>
                                    setaddressOptions(e.target.value)
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  for="delivery"
                                >
                                  Home
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="delivery"
                                  value="work"
                                  onChange={(e) =>
                                    setaddressOptions(e.target.value)
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  for="pickup"
                                >
                                  Work
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="delivery"
                                  value="others"
                                  onChange={(e) =>
                                    setaddressOptions(e.target.value)
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  for="pickup"
                                >
                                  Other
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <button
                              className="btn-primary-gold-address btn-medium"
                              type="submit"
                            >
                              submit
                            </button>
                            {/* <input
                              name="submit"
                              className="btn-black pull-right "
                              type="submit"
                            /> */}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        {/*<!-- End Main -->*/}
      </div>
      {verifyaddError ==
        "No hubs are found near your area, Please try with another address or Order In" && (
        <Alert
          style={{
            position: "fixed",
            bottom: "10px",
            right: "10px",
            width: "350px",
            fontSize: "17px",
            display: showToast ? "unset" : "none",
          }}
          variant="filled"
          severity="error"
        >
          No Store available near by. Can't be delivered at your location.
        </Alert>
      )}
    </div>
  );
};

export default CheckoutAddress;
