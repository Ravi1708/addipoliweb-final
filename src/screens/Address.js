import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FormContainer } from "../components/FormContainer";
import { saveShippingAddress, createAddress } from "../actions/cartActions";
import { CheckoutSteps } from "../components/CheckoutSteps";
import { getUserAddresses } from "../actions/userActions";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Address = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userAddresses = useSelector((state) => state.userAddresses);
  const { loading, error, addresses } = userAddresses;

  const [name, setname] = useState(userInfo.userName);
  const [phoneNumber, setPhoneNumber] = useState(userInfo.phoneNumber);
  const [address, setAddress] = useState(shippingAddress.address);
  const [area, setArea] = useState(shippingAddress.area);
  const [pincode, setPincode] = useState(shippingAddress.pincode);
  const [landmark, setLandmark] = useState(shippingAddress.landmark);
  const [shortNote, setShortNote] = useState(shippingAddress.shortNote);
  const [addressOptions, setaddressOptions] = useState("others");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAddresses());
  }, [dispatch]);

  const EditAddress = (id) => {
    history.push(`/editaddress/${id}`);
  };
  return (
    <div>
      <div className="wrapper">
        {/* <!-- Start Main --> */}
        <main>
          <div class="main-part">
            {/* <!-- Start Breadcrumb Part --> */}
            <section
              class="breadcrumb-part"
              data-stellar-offset-parent="true"
              data-stellar-background-ratio="0.5"
              style={{ backgroundImage: "url('assets/images/breadbg1.jpg')" }}
            >
              <div class="container">
                <div class="breadcrumb-inner">
                  <h2>MY ADDRESS</h2>
                  <a href="/">Home</a>
                  <span>Address</span>
                </div>
              </div>
            </section>
            {/* <!-- End Breadcrumb Part -->
                <!-- Start term condition --> */}
            <section class="term-condition home-icon">
              <div class="icon-default">
                <a href="#">
                  <img src="assets/images/scroll-arrow.png" />
                </a>
              </div>
              <div class="container">
                <div
                  class="col-md-9 col-sm-8 col-xs-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <a href="/addaddress" className="btn-primary-gold btn-medium">
                    Add Address
                  </a>
                  <div className="shop-checkout-left">
                    <h2>MANAGE ADDRESS</h2>
                    <div className="row">
                      {addresses ? (
                        addresses.map((address, index) => {
                          console.log(address);
                          return (
                            <div className="col-md-6">
                              <div className="contact-blog-row">
                                <div className="col-md-12">
                                  <label
                                    className="form-check-label"
                                    for="delivery"
                                  >
                                    <strong>{address.name}</strong>
                                    <br />
                                    {address.address} <br />
                                    {address.area} {address.pincode}
                                    <br />
                                    {address.landmark}
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <a
                                    class="address-cart-btn"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      EditAddress(address.addressId);
                                    }}
                                  >
                                    Edit
                                  </a>
                                </div>
                                <div className="col-md-6">
                                  <a class="address-cart-btn-end" href="#">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <h1>No address Found</h1>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-3 col-sm-4 col-xs-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <div class="terms-right">
                    <ul>
                      <li>
                        <a href="/profile">My Profile</a>
                      </li>
                      <li className="active">
                        <a href="/address">My Address</a>
                      </li>
                      <li>
                        <a href="/history">My Orders</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- end term condition --> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Address;
