import React from "react";

const TrackorderScreen = ({ match }) => {
  const orderId = match.params.id;
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
                  <h2>TRACK YOUR ORDER</h2>
                  <a href="#">Home</a>
                  <span>Order Tracking</span>
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
                    <li className="active">Order Confirmation</li>
                    <li>Food Preparing</li>
                    <li>Food Ready</li>
                    <li>Shipping</li>
                    <li>Delivery</li>
                  </ul>
                </div>
                <div
                  className="track-oder wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <div className="track-oder-inner">
                    <div className="clock-track-icon">
                      <img src="/assets/images/clock-icon.png" alt="image" />
                    </div>
                    <div className="track-status">
                      <h3>Order ID - {orderId} </h3>
                      <br />
                      <h3>
                        <span> We are now preparing your food </span>
                      </h3>
                    </div>
                  </div>
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

export default TrackorderScreen;
