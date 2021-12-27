import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { listProducts } from "../actions/productActions";
import ProductCard from "../components/ProductCard";
import Alert from "@mui/material/Alert";
import {
  login,
  loginwithgoogle,
  logout,
  register,
  registerWithGoogle,
  sendotp,
} from "../actions/userActions";
import Message from "../components/Message";
import { userLoginWithGoogleReducer } from "../reducers/userReducers";
import GoogleLogin from "react-google-login";

import { addToCart, removeFromCart } from "../actions/cartActions";

import axios from "axios";
import Banner from "../components/Banner";
import HomeSlider from "../components/HomeSlider";
import { LinkContainer } from "react-router-bootstrap";

const HomeScreen = ({ match, history }) => {
  const [opencart, setopencart] = useState(false);
  const [googlesignup, setGooglesignup] = useState(false);
  const [opensignin, setopensignin] = useState(false);
  const [opensignupgoogle, setopensignupgoogle] = useState(false);
  const [opensignupotp, setopensignupotp] = useState(false);
  const [opensignup, setopensignup] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState();
  const [username, setusername] = useState("");
  const [tokenId, settokenId] = useState();
  const [redirect, setredirect] = useState(false);
  const [hashValue, sethashValue] = useState();
  const [OTP, setotpvalue] = useState();
  const [ErrorSignin, setErrorSignin] = useState();
  const [ErrorSignup, setErrorSignup] = useState();

  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading: signinLoading, error: signinError, userInfo } = userLogin;

  const userOtp = useSelector((state) => state.userOtp);
  const { loading: otpLoading, error: otpError, otp } = userOtp;

  const userRegister = useSelector((state) => state.userRegister);
  const {
    loading: signuploading,
    error: signupError,
    userInfo: userInfos,
  } = userRegister;

  //get productlist from state
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;

  //sign in with google Handler

  const handleLoginWithGoogle = (googleData) => {
    setGooglesignup(true);
    settokenId(googleData.tokenId);
    dispatch(loginwithgoogle(googleData.tokenId));
  };

  //sign up with google Handler

  const signupwithgoogleHandler = (e) => {
    e.preventDefault();
    console.log(hashValue);
    console.log(OTP);
    dispatch(registerWithGoogle(tokenId, phoneNumber, hashValue, OTP));
  };

  //sign in with OTP Handler

  const signinHandler = (e) => {
    e.preventDefault();
    dispatch(login(phoneNumber, OTP, hashValue));
  };

  //sign up  with OTP Handler

  const signupHandler = (e) => {
    e.preventDefault();
    dispatch(register(username, phoneNumber, email, hashValue, OTP));
  };

  const handleSignup = (googleData) => {
    setGooglesignup(true);
    settokenId(googleData.tokenId);
  };

  const logoutHandler = (e) => {
    dispatch(logout);
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = (e) => {
    e.preventDefault();
    console.log(shippingAddress);

    if (shippingAddress.hubs == "unavailable") {
      setShowToast(true);
    } else {
      if (userInfo) {
        history.push("/checkoutaddress");
      } else {
        setredirect(true);
        setopensignin(true);
      }
    }
  };

  const getotpHandler = (e) => {
    dispatch(sendotp(phoneNumber));
  };

  const handleCart = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  //get product list when dispatch changes
  useEffect(() => {
    if (opensignin == true) {
      if (signinError == "User does exist in this method.") {
        setopensignin(false);
        setopensignupotp(true);
      }
    }
    if (opensignin == true) {
      if (signinError == "User does not exist, Please sign in") {
        setopensignin(false);
        setopensignupgoogle(true);
      }
    }
    if (opensignin == true) {
      if (userInfo) {
        setopensignin(false);
      }
    }
    if (opensignupgoogle == true) {
      if (userInfo) {
        setopensignupgoogle(false);
      }
    }
    if (opensignupotp == true) {
      if (userInfo) {
        setopensignupotp(false);
      }
    }
    if (signupError) {
      setErrorSignup(signupError);
    }
    if (signinError) {
      setErrorSignin(signinError);
    }
    if (redirect == true) {
      if (userInfo) {
        history.push("/checkoutaddress");
      }
    }
    if (otp) {
      sethashValue(otp.hashValue);
    }
    dispatch(listProducts());
  }, [dispatch, userInfo]);

  return (
    <div>
      <div className="wrapper">
        <main>
          <div className="main-part">
            <section className="home-slider">
              <Banner />
            </section>
            {/* <!-- End Slider Part --> */}
            <section
              id="reach-to"
              className="welcome-part"
              style={{ padding: "0" }}
            >
              <div className="icon-default">
                <a href="#reach-to" className="scroll">
                  <img src="assets/images/scroll-arrow.png" alt="" />
                </a>
              </div>
            </section>
            {/* <!-- Start Instagram --> */}
            <section
              className="instagram-main home-icon wow fadeInDown"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <div className="gallery-slider">
                <HomeSlider />
              </div>
            </section>
            {/* <!-- End Instagram --> */}

            {/*--------Combo Offer Menu ---------------*/}

            <section
              className="dishes banner-bg home-icon invert wow fadeInDown"
              data-background="assets/img/banner1.jpg"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
              style={{ backgroundImage: "url(assets/img/banner1.jpg)" }}
            >
              <div className="icon-default icon-black">
                <img src="assets/img/icon5.png" alt="" />
              </div>
              <div className="container">
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
                  severity="info"
                >
                  No hubs are found near your area,
                </Alert>
                <h3 style={{ color: "#04e04c" }}>Special Combo Offer</h3>
                <div className="row" data-defaultfilter=".breakfast">
                  <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <div className="row">
                      {products
                        .filter(
                          (filteredproducts) =>
                            filteredproducts.category == "Combo"
                        )
                        .map((combo) => {
                          return (
                            <div
                              className="col-md-4 col-sm-4 col-xs-6 fadeInDown"
                              data-wow-duration="1000ms"
                              data-wow-delay="300ms"
                            >
                              <ProductCard
                                product={combo}
                                handleCart={handleCart}
                                key={combo.id}
                              />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="pb-2">
                      <div className="bg-white rounded shadow-sm text-white mb-4 p-4 clearfix restaurant-detailed-earn-pts card-icon-overlap">
                        <img
                          className="img-fluid float-left mr-3"
                          src="assets/img/earn-score-icon.png"
                        />
                        <h6 className="pt-0 text-primary mb-1 font-weight-bold">
                          OFFER
                        </h6>
                        <p className="offer-text">
                          Update Soon
                          {/* 50Rs off on orders above &#8377; 199 | Use coupon{" "} */}
                          {/* <span className="text-danger font-weight-bold">
                            ADDIPOLIFIRST
                          </span> */}
                          {/* <small> *New user only</small> */}
                        </p>
                        <div className="icon-overlap">
                          <i className="icofont-sale-discount"></i>
                        </div>
                      </div>
                    </div>
                    <div className="generator-bg rounded shadow-sm mb-4 p-4 osahan-cart-item">
                      <h5 className="mb-1 text-white">Your Order</h5>
                      <p className="mb-4 text-white">
                        ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                        ITEMS
                      </p>
                      <div className="side-add-cart bg-white rounded shadow-sm mb-2">
                        <div className="gold-members p-2">
                          {cartItems.reduce(
                            (acc, item) => acc + item.qty,
                            0
                          ) === 0 ? (
                            <img src="assets/images/empty-cart.png" />
                          ) : (
                            cartItems.map((item) => {
                              {
                                if (item.qty === 0) {
                                  removeFromCartHandler(item.product);
                                }
                              }
                              return (
                                <div
                                  className="cart-item"
                                  style={{ display: "flex" }}
                                >
                                  <div className="cart-item-left">
                                    <img src={`${item.image}`} alt="" />
                                  </div>
                                  <div
                                    className="cart-item-right"
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      width: "75%",
                                    }}
                                  >
                                    <h6 style={{ fontSize: "12px" }}>
                                      {item.name}
                                    </h6>
                                    <div className="count-number float-right">
                                      <span style={{ marginRight: "10px" }}>
                                        &#8377; {item.price * item.qty}
                                      </span>
                                      <button
                                        id="sub"
                                        className="cart-count"
                                        onClick={(e) =>
                                          dispatch(
                                            addToCart(
                                              item.product,
                                              Number(item.qty - 1)
                                            )
                                          )
                                        }
                                      >
                                        -
                                      </button>
                                      <input
                                        className="count-nom"
                                        type="text"
                                        id="qtyBox"
                                        readonly=""
                                        value={item.qty}
                                      />
                                      <button
                                        id="add"
                                        className="cart-count"
                                        onClick={(e) =>
                                          dispatch(
                                            addToCart(
                                              item.product,
                                              Number(item.qty + 1)
                                            )
                                          )
                                        }
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>
                                  <span
                                    className="delete-icon"
                                    onClick={() =>
                                      removeFromCartHandler(item.product)
                                    }
                                  ></span>
                                </div>
                              );
                            })
                          )}
                        </div>
                      </div>
                      <div className="mb-2 bg-white rounded p-2 clearfix">
                        <img
                          className="img-fluid float-left"
                          src="assets/img/wallet-icon.png"
                        />
                        <h6
                          className="font-weight-bold text-right mb-2"
                          style={{ fontSize: "16px" }}
                        >
                          Subtotal :
                          <span className="text-danger">
                            &#8377;
                            {cartItems
                              .reduce(
                                (acc, item) => acc + item.qty * item.price,
                                0
                              )
                              .toFixed(2)}
                          </span>
                        </h6>
                        <p className="seven-color mb-1 text-right">
                          Extra charges may apply
                        </p>
                        {/* <p className="text-black mb-0 text-right">
                          You have saved &#8377; 955 on the bill
                        </p> */}
                      </div>
                      <div
                        onClick={
                          cartItems.reduce((acc, item) => acc + item.qty, 0) !=
                            0 && checkoutHandler
                        }
                        className="btn checkout-btn btn-block btn-lg"
                      >
                        Checkout
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- Start Menu Part --> */}
            <section
              className="special-menu bg-skeen home-icon wow fadeInDown"
              id="menuz"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
              style={{ paddingBottom: "50px", minHeight: "750px" }}
            >
              <div className="icon-default icon-skeen">
                <img src="assets/images/icon6.png" alt="" />
              </div>
              <div className="container">
                <div className="build-title">
                  <h2>Our Special Menu</h2>
                  <h6>
                    The role of a good cook ware in the preparation of a
                    sumptuous meal cannot be over emphasized then one consider
                    white bread
                  </h6>
                </div>
                <div className="menu-wrapper">
                  {/* <div className="portfolioFilter">
                    <div className="portfolioFilter-inner">
                      <LinkContainer to={`${match}/`} activeclassName="current">
                        <a>All</a>
                      </LinkContainer>
                      <NavLink to="/" activeClassName="current">
                        <a>Addipoli Puttu’s</a>
                      </NavLink>
                      <LinkContainer to="/wrappies" activeClassName="current">
                        <a href="/wrappies">Addipoli Wrappies</a>
                      </LinkContainer>
                      <LinkContainer to="/dishes" activeClassName="current">
                        <a>Addipoli Dishes</a>
                      </LinkContainer>
                      <LinkContainer to="/others" activeClassName="current">
                        <a>Others</a>
                      </LinkContainer>
                    </div>
                    <div className="portfolioFilter-inner">
                      <a
                        href="javascript:;"
                        data-filter="*"
                        className="current"
                      >
                        All
                      </a>
                      <a href="javascript:;" data-filter=".item1">
                        Addipoli Puttu’s
                      </a>
                      <a href="javascript:;" data-filter=".item2">
                        Addipoli Wrappies
                      </a>
                      <a href="javascript:;" data-filter=".item3">
                        Addipoli Dishes
                      </a>
                      <a href="javascript:;" data-filter=".item4">
                        Others
                      </a>
                    </div>
                  </div> */}
                  <div className="row">
                    <div
                      className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                      style={{ position: "relative" }}
                    >
                      <Route path="/" exact>
                        <div className="portfolioContainer row">
                          {products
                            .filter(
                              (filteredproducts) =>
                                filteredproducts.category != "Combo"
                            )
                            .map((combo) => {
                              return (
                                <div
                                  className={`col-lg-3 col-md-6 col-sm-12 col-xs-12 fadeInDown ${combo.category}`}
                                  data-wow-duration="1000ms"
                                  data-wow-delay="300ms"
                                >
                                  <ProductCard
                                    product={combo}
                                    handleCart={handleCart}
                                    key={combo.id}
                                  />
                                </div>
                              );
                            })}
                        </div>
                      </Route>
                      <Route path="/:id">
                        <ProductCard />
                        {/* <div className="portfolioContainer row">
                          {products
                            .filter(
                              (filteredproducts) =>
                                filteredproducts.category == "puttu"
                            )
                            .map((combo) => {
                              return (
                                <div
                                  className={`col-md-3 col-sm-3 col-xs-6 fadeInDown ${combo.category}`}
                                  data-wow-duration="1000ms"
                                  data-wow-delay="300ms"
                                >
                                  <ProductCard
                                    product={combo}
                                    handleCart={handleCart}
                                    key={combo.id}
                                  />
                                </div>
                              );
                            })}
                        </div> */}
                      </Route>
                    </div>
                  </div>
                </div>
              </div>
              <div className="float-main">
                <div className="icon-top-left">
                  <img src="assets/images/icon7.png" alt="" />
                </div>
                <div className="icon-bottom-left">
                  <img src="assets/images/icon8.png" alt="" />
                </div>
                <div className="icon-top-right">
                  <img src="assets/images/icon9.png" alt="" />
                </div>
                <div className="icon-bottom-right">
                  <img src="assets/images/icon10.png" alt="" />
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      {/* <!-- cart popup --> */}
      <div
        className="cart-popup"
        style={{ display: opencart ? "flex" : "none" }}
      >
        <div className="cart-wrap">
          <div className="cart-blog">
            <div
              className="close"
              onClick={(e) => {
                e.preventDefault();
                setopencart(false);
              }}
            >
              <h3 className="close1">X</h3>
            </div>
            {cartItems.reduce((acc, item) => acc + item.qty, 0) === 0 ? (
              <img src="assets/images/empty-cart.png" />
            ) : (
              <>
                {cartItems.map((item) => {
                  if (item.qty === 0) {
                    removeFromCartHandler(item.product);
                  }

                  return (
                    <>
                      <div className="cart-item">
                        <div className="cart-item-left">
                          <img src={`${item.image}`} alt="" />
                        </div>
                        <div className="cart-item-right">
                          <h6>{item.name}</h6>
                          <span>&#8377; {item.price}</span>
                        </div>
                        <span
                          className="delete-icon"
                          onClick={() => removeFromCartHandler(item.product)}
                        ></span>
                      </div>
                    </>
                  );
                })}
                <div className="subtotal">
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <h6>Subtotal :</h6>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <span>
                      &#8377;
                      {cartItems
                        .reduce((acc, item) => acc + item.qty * item.price, 0)
                        .toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="cart-btn">
                  <a onClick={checkoutHandler} className="btn-main checkout">
                    CHECK OUT
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* <!-- login popup --> */}
      <div
        className="login-popup"
        style={{ display: opensignin ? "flex" : "none" }}
      >
        <div className="container" id="container">
          <div className="close">
            <h3
              className="close2"
              onClick={() => {
                setopensignin(false);
                if (
                  signinError !=
                    "User does not exist in this method. Please use your original form of registration" ||
                  signinError != "User does not exist, Please sign in"
                ) {
                  setEmail("");
                  setphoneNumber("");
                  setusername("");
                  settokenId();
                  sethashValue();
                  setotpvalue();
                  setErrorSignin(null);
                  setErrorSignup(null);
                  setErrorSignin(null);
                  settokenId(null);
                  setGooglesignup(false);
                }
              }}
            >
              X
            </h3>
          </div>
          <div>
            <form onSubmit={signinHandler}>
              <h4
                style={{
                  color: "#671918",
                  fontSize: "22px",
                  marginTop: "30px",
                }}
              >
                Welcome To{" "}
                <span style={{ color: "#04e04c", fontSize: "22px" }}>
                  Addipoli
                </span>{" "}
                <span style={{ color: "#d8391a", fontSize: "22px" }}>
                  Puttu's
                </span>
              </h4>
              <GoogleLogin
                style={{
                  fontSize: "50px",
                  padding: "0px !important",
                  margin: "0px !important",
                }}
                theme="dark"
                // live key
                clientId="859216769475-tqnheotaog2h84dbpq3g11u2h88nhpnn.apps.googleusercontent.com"
                //test key
                // clientId="859216769475-103gs96n5kpq7hfh8dbsfp9horvb4bii.apps.googleusercontent.com"
                buttonText="Log in with Google"
                onSuccess={handleLoginWithGoogle}
                onFailure={handleLoginWithGoogle}
                cookiePolicy={"single_host_origin"}
              />
              <span>or use your Mobile Number</span>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    width: "50px",
                    textAlign: "center",
                    backgroundColor: "#04e04c",
                    borderRadius: "50px",
                    height: "50px",
                  }}
                >
                  +91
                </p>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setphoneNumber(e.target.value)}
                  style={{ width: "85%" }}
                />
              </div>
              {otpError && <Message>{otpError}</Message>}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <input
                  style={{
                    visibility: hashValue ? "unset" : "hidden",
                    width: "65%",
                  }}
                  type="text"
                  vale={OTP}
                  onChange={(e) => setotpvalue(Number(e.target.value))}
                  placeholder="Enter OTP"
                />

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    getotpHandler();
                  }}
                >
                  {hashValue ? "Resend" : "Get OTP"}
                </button>
              </div>

              {/* </div> */}

              {ErrorSignin && <Message>{ErrorSignin}</Message>}

              <button
                type="submit"
                style={{ display: hashValue ? "unset" : "none" }}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- signup popup with google--> */}
      <div
        className="signup-popup"
        style={{ display: opensignupgoogle ? "flex" : "none" }}
      >
        <div className="container" id="container">
          <div className="close">
            <h3
              className="close3"
              onClick={() => {
                setopensignupgoogle(false);
                setEmail("");
                setphoneNumber(null);
                setusername("");
                settokenId();
                sethashValue(null);
                setotpvalue(null);
                setErrorSignin(null);
                setErrorSignup(null);
                setErrorSignin(null);
                settokenId(null);
                setGooglesignup(false);
              }}
            >
              X
            </h3>
          </div>
          <div>
            <form
              onSubmit={googlesignup ? signupwithgoogleHandler : signupHandler}
            >
              <h1
                style={{
                  color: "#671918",
                  fontSize: "30px",
                  marginTop: "30px",
                }}
              >
                Create Account
              </h1>

              <h5
                style={{
                  display: googlesignup ? "unset" : "none",
                  padding: "30px 0px",
                }}
              >
                Enter Your Mobile Number
              </h5>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    width: "50px",
                    textAlign: "center",
                    backgroundColor: "#04e04c",
                    borderRadius: "50px",
                    height: "50px",
                  }}
                >
                  +91
                </p>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setphoneNumber(e.target.value)}
                  style={{ width: "85%" }}
                />
              </div>
              {otpError && <Message>{otpError}</Message>}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <input
                  style={{
                    visibility: hashValue ? "unset" : "hidden",
                    width: "65%",
                  }}
                  type="text"
                  vale={OTP}
                  onChange={(e) => setotpvalue(Number(e.target.value))}
                  placeholder="Enter OTP"
                />

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    getotpHandler();
                  }}
                >
                  {hashValue ? "Resend" : "Get OTP"}
                </button>
              </div>

              {/* </div> */}

              {ErrorSignup && <Message>{ErrorSignup}</Message>}

              <button
                type="submit"
                style={{ display: hashValue ? "unset" : "none" }}
              >
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- signup popup with OTP--> */}
      <div
        className="signup-popup"
        style={{ display: opensignupotp ? "flex" : "none" }}
      >
        <div className="container" id="container">
          <div className="close">
            <h3
              className="close3"
              onClick={() => {
                setopensignupotp(false);
                setEmail("");
                setphoneNumber("");
                setusername("");
                settokenId();
                sethashValue();
                setotpvalue();
                setErrorSignin(null);
                setErrorSignup();
              }}
            >
              X
            </h3>
          </div>
          <div>
            <form
              onSubmit={googlesignup ? signupwithgoogleHandler : signupHandler}
            >
              <h1
                style={{
                  color: "#671918",
                  fontSize: "30px",
                  marginTop: "30px",
                }}
              >
                Create Account
              </h1>

              <input
                type="text"
                name="name"
                placeholder="Name"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Message>{signupError}</Message>
              <button type="submit">SignUp</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
