import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { CheckoutSteps } from "../components/CheckoutSteps";
import { Link } from "react-router-dom";
import { getOrderDetails } from "../actions/orderActions";
import { LinkContainer } from "react-router-bootstrap";

const OrderCompleted = ({ match }) => {
  const orderId = match.params.id;
  console.log(orderId);

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  return (
    <div>
      <div className="wrapper">
        {/*<!-- Start Main -->*/}
        <main>
          <div className="main-part">
            {/*<!-- Start Breadcrumb Part -->*/}
            <section
              className="breadcrumb-part"
              data-stellar-offset-parent="true"
              data-stellar-background-ratio="0.5"
              style={{ backgroundImage: "url('/assets/images/breadbg1.jpg')" }}
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
                <img src="/assets/images/scroll-arrow.png" alt="image" />
              </div>
              <div className="container">
                <div
                  className="checkout-wrap checkout-wrap-more wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <ul className="checkout-bar">
                    <li className="done-proceed">Login</li>
                    <li className="done-proceed">Address</li>
                    <li className="done-proceed">Shop Cart</li>
                    <li className="done-proceed">Payment Method</li>
                    <li className="active done-proceed">Order Complete</li>
                  </ul>
                </div>
                <div class="order-complete-box">
                  <div className="cart-total-title">
                    <h5>THANKS FOR YOUR ORDER !!!</h5>
                    <h5>
                      Order ID - <span>{orderId}</span>
                    </h5>
                  </div>
                  <img src="/assets/images/complete-sign.png" />
                  {/* <div class="row">
                    <div class="col-md-8">                      
                    </div>
                  </div> */}
                  <p>
                    Thank you for ordering in our restaurant.
                    <br /> Now check a Food Tracker progress with your order.
                  </p>
                  <LinkContainer to={`/track/${orderId}`}>
                    <div className="btn-medium btn-primary-gold btn-large">
                      Go To Food Tracker
                    </div>
                  </LinkContainer>
                </div>
              </div>
            </section>
          </div>
        </main>
        {/*<!-- End Main -->*/}
      </div>
    </div>
  );
};

export default OrderCompleted;
