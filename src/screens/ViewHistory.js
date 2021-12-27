import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listMyOrders } from "../actions/orderActions";

const ViewHistory = ({ match, history }) => {
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
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div
                      className="shop-cart-list wow fadeInDown"
                      data-wow-duration="1000ms"
                      data-wow-delay="300ms"
                    >
                      <table className="shop-cart-table">
                        <thead>
                          <tr>
                            <th>PRODUCT</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>PRODUCT</th>
                            <td>
                              <div className="product-cart">
                                <img
                                  src="assets/images/img70.png"
                                  alt="image"
                                />
                              </div>
                              <div className="product-cart-title">
                                <span>Blanched Garlic</span>
                              </div>
                            </td>
                            <th>PRICE</th>
                            <td>
                              <strong>$59</strong>
                            </td>
                            <th>QUANTITY</th>
                            <td>
                              <div className="price-textbox">
                                <span>10</span>
                              </div>
                            </td>
                            <th>TOTAL</th>
                            <td>$59</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="product-cart-detail">
                        <div className="title text">
                          <h5 className="text-coffee">SHIPPING ADDRESS</h5>
                        </div>
                        <h6 className="heade-order">
                          <p>
                            Siva (Home) <br />
                            21a Subiramaniya samy Kovil Street <br />
                            Coimabatore 641030
                            <br />
                            Near Landmark
                            <br />
                            Mobile Number - 123456789
                          </p>
                        </h6>
                      </div>
                      <div className="product-cart-detail">
                        <div className="title text">
                          <h5 className="text-coffee">
                            ORDER STATUS - Delivery
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div
                      className="cart-total wow fadeInDown"
                      data-wow-duration="1000ms"
                      data-wow-delay="300ms"
                    >
                      <div className="cart-total-title">
                        <h5>CART TOTALS</h5>
                      </div>
                      <div className="product-cart-total">
                        <small>Total products</small>
                        <span>$140.00</span>
                      </div>
                      <div className="product-cart-total">
                        <small>Coupon Applied</small>
                        <span>$15.00</span>
                      </div>
                      <div className="product-cart-total">
                        <small>Delivery Charge</small>
                        <span>$15.00</span>
                      </div>
                      <div className="product-cart-total">
                        <small>Tax</small>
                        <span>$15.00</span>
                      </div>
                      <div className="grand-total">
                        <h5>
                          TOTAL <span>$140.00</span>
                        </h5>
                      </div>
                    </div>
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

export default ViewHistory;
