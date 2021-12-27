import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listMyOrders } from "../actions/orderActions";

const Profile = ({ match, history }) => {
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
                  <h2>MY PROFILE</h2>
                  <a href="/">Home</a>
                  <span>Profile</span>
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
                  <div className="shop-checkout-left">
                    <h5>Profile</h5>
                    <form className="form" method="post" name="contact-form">
                      <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <label>Name</label>
                          <input name="" type="text" required></input>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <label>Phone Number*</label>
                          <input name="" type="text" required></input>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <label>Mail-ID</label>
                          <input name="" type="text" required></input>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <label>Change Password</label>
                          <input name="" type="text" required></input>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <input
                            name="submit"
                            value="Submit"
                            className="btn-primary-gold btn-medium"
                            type="submit"
                          ></input>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  class="col-md-3 col-sm-4 col-xs-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <div class="terms-right">
                    <ul>
                      <li class="active">
                        <a href="/profile">My Profile</a>
                      </li>
                      <li>
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

export default Profile;
