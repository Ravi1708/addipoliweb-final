import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listMyOrders } from "../actions/orderActions";

const OrderhistoryScreen = ({ match, history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  console.log(orders);

  useEffect(() => {
    dispatch(listMyOrders());
  }, [dispatch, history, userInfo]);
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
                  <h2>YOUR ORDER HISTORY</h2>
                  <a href="/">Home</a>
                  <span>Order History</span>
                </div>
              </div>
            </section>
            {/* <!-- End Breadcrumb Part -->
                <!-- Start term condition --> */}
            <section class="term-condition home-icon">
              <div class="icon-default">
                <a>
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
                    <h2>ORDER HISTORY</h2>
                    <div className="row">
                      {orders ? (
                        orders.map((order, index) => {
                          return (
                            <div className="col-md-6">
                              <div className="contact-blog-row-address">
                                <div className="col-md-12">
                                  <label
                                    className="form-check-label"
                                    for="delivery"
                                  >
                                    <strong>ORDER-ID : {order.orderId}</strong>
                                    <br />
                                    <span>Order Items : Addipoli Puttus</span>
                                  </label>
                                </div>
                                <div className="col-md-12">
                                  <a
                                    class="address-cart-btn-end"
                                    href="/viewhistory"
                                  >
                                    View Details
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <h1>No orders found </h1>
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
                      <li>
                        <a href="/address">My Address</a>
                      </li>
                      <li className="active">
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

export default OrderhistoryScreen;
