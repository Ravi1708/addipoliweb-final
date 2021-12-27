import React, { useState, useEffect } from "react";

const AboutScreen = () => {
  return (
    <div>
      <div className="wrapper">
        {/*<!-- Start Main -->*/}
        <main>
          <div className="main-part">
            {/* <!-- Start Breadcrumb Part -->*/}
            <section
              className="breadcrumb-part"
              data-stellar-offset-parent="true"
              data-stellar-background-ratio="0.5"
              style={{ backgroundImage: "url('assets/images/breadbg1.jpg')" }}
            >
              <div className="container">
                <div className="breadcrumb-inner">
                  <h2>ABOUT US</h2>
                  <a href="/">Home</a>
                  <span>About Us</span>
                </div>
              </div>
            </section>
            {/*<!-- End Breadcrumb Part -->*/}
            {/* <!-- Start Welcome Part --> */}
            <section
              className="welcome-part invert home-icon wow fadeInDown"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <div className="icon-default">
                <a href="#">
                  <img src="assets/images/scroll-arrow.png" />
                </a>
              </div>
              <div className="container">
                <div className="build-title">
                  <h2>Welcome To Addipoli Puttu's</h2>
                  {/* <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6> */}
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <p
                      style={{
                        fontSize: "20px",
                        lineHeight: "2.0",
                        letterSpacing: "1.5px",
                      }}
                    >
                      Radhe Food Industries is formed by women who want to
                      achieve. Our goal is to make the world aware of our
                      Traditional, quality and healthy foods and to promote good
                      health for all. Also enhance the employment of women and
                      improve their status in the society. We have worked couple
                      of years to bring this healthy food to the people in the
                      best possible way and also designed exclusive cooking
                      utensils for this project. In today’s fast-paced world we
                      are well aware of the need for steam-based food to change
                      the health disorders caused by adulterated food. I hope
                      you also realize the importance of steam-based food and
                      benefit from it in life. Addipoli Food…! Addipoli Life…!
                    </p>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <img src="assets/img/logo-icon.png" />
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- End Welcome Part --> */}
            <section
              className="bg-skeen invert home-icon wow fadeInDown"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <div className="icon-default icon-skeen">
                <img src="assets/images/icon35.png" />
              </div>
              <div className="container">
                <div className="build-title">
                  <h2>Addipoli Service</h2>
                  {/* <h6>This is what we do and we do it perfectly</h6> */}
                </div>
                <div className="service-track">
                  <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                      <div className="service-track-inner btn-shadow">
                        <div className="service-track-info">
                          <h3>
                            Addipoli<span>Puttu's</span>
                          </h3>
                        </div>
                        <div
                          className="service-track-overlay banner-bg"
                          style={{
                            backgroundImage:
                              "url('assets/images/hover-img1.jpg')",
                          }}
                        >
                          <img src="assets/images/img11.png" />
                          <h3>
                            Addipoli<span>Puttu's</span>
                          </h3>
                          {/* <p>Aptent taciti sociosqu ad litora euismod atras vulputate iltricies etri elit class.</p> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                      <div className="service-track-inner btn-shadow">
                        <div className="service-track-info">
                          <h3>
                            Addipoli <span>Wrappies</span>
                          </h3>
                        </div>
                        <div
                          className="service-track-overlay banner-bg"
                          style={{
                            backgroundImage:
                              "url('assets/images/hover-img2.jpg')",
                          }}
                        >
                          <img src="assets/images/icon14.png" />
                          <h3>
                            Addipoli <span>Wrappies</span>
                          </h3>
                          {/* <p>Aptent taciti sociosqu ad litora euismod atras vulputate iltricies etri elit class.</p> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                      <div className="service-track-inner btn-shadow">
                        <div className="service-track-info">
                          <h3>
                            Addipoli <span>Dishes</span>
                          </h3>
                        </div>
                        <div
                          className="service-track-overlay banner-bg"
                          style={{
                            backgroundImage:
                              "url('assets/images/hover-img3.jpg')",
                          }}
                        >
                          <img src="assets/images/icon12.png" />
                          <h3>
                            Addipoli <span>Dishes</span>
                          </h3>
                          {/* <p>Aptent taciti sociosqu ad litora euismod atras vulputate iltricies etri elit class.</p> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                      <div className="service-track-inner btn-shadow">
                        <div className="service-track-info">
                          <h3>
                            Addipoli <span>Combo</span>
                          </h3>
                        </div>
                        <div
                          className="service-track-overlay banner-bg"
                          style={{
                            backgroundImage:
                              "url('assets/images/hover-img4.jpg')",
                          }}
                        >
                          <img src="assets/images/icon19.png" />
                          <h3>
                            Addipoli <span>Combo</span>
                          </h3>
                          {/* <p>Aptent taciti sociosqu ad litora euismod atras vulputate iltricies etri elit class.</p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="food-hours banner-bg invert home-icon wow fadeInDown"
              style={{ backgroundImage: "url('assets/images/banner2.jpg')" }}
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <div className="icon-default icon-black">
                <img src="assets/images/icon19.png" />
              </div>
              <div className="container">
                <div className="food-blog">
                  <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-12 food-mxs">
                      <div className="food-blog-inner">
                        <div className="food-item">
                          <div className="food-item-inner">
                            <img src="assets/images/icon15.png" />
                          </div>
                        </div>
                        <h2>Breakfast</h2>
                        <span>8.00 am 10.00 am</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 food-mxs">
                      <div className="food-blog-inner">
                        <div className="food-item">
                          <div className="food-item-inner">
                            <img src="assets/images/icon16.png" />
                          </div>
                        </div>
                        <h2>Lunch</h2>
                        <span>1.00 am 2.00 am</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 food-mxs">
                      <div className="food-blog-inner">
                        <div className="food-item">
                          <div className="food-item-inner">
                            <img src="assets/images/icon17.png" />
                          </div>
                        </div>
                        <h2>Dinner</h2>
                        <span>7.00 am 9.00 am</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 food-mxs">
                      <div className="food-blog-inner">
                        <div className="food-item">
                          <div className="food-item-inner">
                            <img src="assets/images/icon18.png" />
                          </div>
                        </div>
                        <h2>Dessert</h2>
                        <span>All Day</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- End Food Hours --> */}

            <section
              className="home-icon service-record invert pad-bottom-remove wow fadeInDown"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <div className="icon-default">
                <img src="assets/images/icon11.png" />
              </div>
              <div className="container">
                <div className="build-title">
                  <h2>Ingenious Food Celebration In Coimbatore</h2>
                  {/* <h6>This is what we do and we do it perfectly</h6> */}
                </div>
                <div className="service-port-outer">
                  <div
                    className="service-port odd wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                  >
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-12 service-port-left">
                        <div className="service-port-prev">
                          <img src="assets/images/img38.png" />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12 service-port-right">
                        <div className="service-port-next">
                          <h5>HEALTHY FOOD WITH HEAVENLY TASTE</h5>
                          <p>
                            Partners of Radhe Food Industries introducing the
                            Brand new Addipoli Puttu's at the launch event.
                          </p>
                          <p>
                            Channel Partner of Radhe food Industries,
                            Mr.Balamurugan from Chennai receiving the Addipoli
                            Puttu's.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="service-port even wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                  >
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-12 service-port-left">
                        <div className="service-port-next">
                          <h5>PERFECTLY LIGHT IN EVERY BITE</h5>
                          <p>
                            Our heartfelt thanks to Mr.Rajappan & Mrs.Sandhya
                            and Mr.Nandakumar & Mrs.Sangeetha, who received and
                            congratulated us at the launch event.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12 service-port-right">
                        <div className="service-port-prev">
                          <img src="assets/images/img37.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- Start Food Hours --> */}

            {/* <!-- Start Client Say --> */}
            {/* <section className="client banner-bg invert invert-black home-icon wow fadeInDown" style={{backgroundImage: "url('assets/images/banner3.jpg')"}} data-wow-duration="1000ms" data-wow-delay="300ms">
                <div className="container">
                    <div className="build-title">
                        <h2>What Clients Say</h2>
                        <h6>150+ Satisfied Clients</h6>
                    </div>
                    <div className="client-say">
                        <div className="owl-carousel owl-theme" data-items="1" data-laptop="1" data-tablet="1" data-mobile="1" data-nav="false" data-dots="true" data-autoplay="true" data-speed="1800" data-autotime="5000">
                            <div className="item">
                                <p><img src="assets/img/avatar.jpg"/></p>
                                <h5>Amith </h5>
                                <p>Kitchen Manager</p>
                                <p>Success isn’t really that difficult. There is a significant portion of the
                                      population here in Tamilnadu, that actually want and need
                                    success really no magic to be hard.</p>
                            </div>
                            <div className="item">
                                <p><img src="assets/img/avatar.jpg" /></p>
                                <h5>Sivamurugan</h5>
                                <p>Kitchen Manager</p>
                                <p>Success isn’t really that difficult. There is a significant portion of the
                                      population here in Tamilnadu, that actually want and need
                                    success really no magic to be hard.</p>
                            </div>
                          </div>
                    </div>
                </div>
            </section> */}
            {/* <!-- Start Feature list --> */}
            <section
              className="bg-skeen feature-list text-center invert home-icon wow fadeInDown"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <div className="icon-default icon-skeen">
                <img src="assets/images/icon22.png" />
              </div>
              <div className="container">
                <div className="build-title">
                  <h2>Delicious and Nutritious</h2>
                  {/* <h6>The role of a good cook ware in the preparation of a sumptuous meal cannot be over emphasized then one consider white bread</h6> */}
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="feature-list-icon">
                      <div className="feature-icon-table">
                        <img src="assets/images/img9.png" />
                      </div>
                    </div>
                    <h5>Fresh Dishes</h5>
                    <p>Eat Healthy, Live Better</p>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="feature-list-icon">
                      <div className="feature-icon-table">
                        <img src="assets/images/img10.png" />
                      </div>
                    </div>
                    <h5>Various Menu</h5>
                    <p>Move your Feet, Get a Treat</p>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="feature-list-icon">
                      <div className="feature-icon-table">
                        <img src="assets/images/img13.png" />
                      </div>
                    </div>
                    <h5>Well Service</h5>
                    <p>The only thing we love more than Food is You!</p>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="feature-list-icon">
                      <div className="feature-icon-table">
                        <img src="assets/images/img12.png" />
                      </div>
                    </div>
                    <h5>Fast Delivery</h5>
                    <p>Giving your Hunger a new Option</p>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- End Feature list --> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AboutScreen;
