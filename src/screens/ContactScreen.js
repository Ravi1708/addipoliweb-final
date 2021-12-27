import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const ContactScreen = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="wrapper">
        {/*<!-- Start Main --> */}
        <main>
          <div className="main-part">
            <section className="contact-map">
              {/* <div className="map-outer">
                <div id="map"></div>
              </div> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.083941803793!2d76.99746991480305!3d11.032328792148196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859206f2d3d2d%3A0xfa29aa04e6ba751a!2sAddipoli%20puttus!5e0!3m2!1sen!2sin!4v1638460670094!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </section>
            {/* <!-- Start Contact Part --> */}
            <section className="default-section contact-part home-icon">
              <div className="icon-default">
                <a>
                  <img src="assets/images/scroll-arrow.png" />
                </a>
              </div>
              <div className="container">
                <div className="title text-center">
                  <h2 className="text-coffee">Contact Us</h2>
                </div>
                <div className="row">
                  <div
                    className="col-md-4 col-sm-4 col-xs-12 wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                  >
                    <div className="contact-blog-row">
                      <div className="contact-icon">
                        <img src="assets/images/location-icon.png" />
                      </div>
                      <p>
                        321/171, Giriamman Kovil Street, Peelamedu, Coimbatore -
                        641004.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-4 col-xs-12 wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                  >
                    <div className="contact-blog-row">
                      <div className="contact-icon">
                        <img src="assets/images/cell-icon.png" />
                      </div>
                      <p>
                        <a href="tel:0422-3585241">
                          0422-3585241 , +91 80152 56197
                        </a>
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-4 col-xs-12 wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                  >
                    <div className="contact-blog-row">
                      <div className="contact-icon">
                        <img src="assets/images/mail-icon.png" />
                      </div>
                      <p>
                        <a href="mailto:radhefoodindustries@gmail.com">
                          radhefoodindustries@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-md-8 col-sm-8 col-xs-12 wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                  >
                    <Box sx={{ width: "100%", typography: "body1" }}>
                      <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                          <TabList
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                          >
                            <Tab
                              label="Item One"
                              value="1"
                              style={{ outline: "none " }}
                            />
                            <Tab
                              label="Item Two"
                              value="2"
                              style={{ outline: "none " }}
                            />
                            <Tab
                              label="Item Three"
                              value="3"
                              style={{ outline: "none " }}
                            />
                          </TabList>
                        </Box>
                        <TabPanel value="1">
                          {/* <h5 className="text-coffee">Drop your Feedback</h5> */}
                          <form
                            className="form"
                            method="post"
                            name="contact-form"
                          >
                            <div className="row">
                              <div className="alert-container"></div>
                              <div className="col-md-6 col-sm-6 col-xs-12">
                                <label>First Name *</label>
                                <input
                                  name="first_name"
                                  type="text"
                                  required
                                ></input>
                              </div>
                              <div className="col-md-6 col-sm-6 col-xs-12">
                                <label>Last Name *</label>
                                <input
                                  name="last_name"
                                  type="text"
                                  required
                                ></input>
                              </div>
                              <div className="col-md-6 col-sm-6 col-xs-12">
                                <label>Email *</label>
                                <input
                                  name="email"
                                  type="email"
                                  required
                                ></input>
                              </div>
                              <div className="col-md-6 col-sm-6 col-xs-12">
                                <label>Phone Number *</label>
                                <input
                                  name="subject"
                                  type="text"
                                  required
                                ></input>
                              </div>
                              <div className="col-md-12 col-sm-12 col-xs-12">
                                <label>Your Message *</label>
                                <textarea name="message" required></textarea>
                              </div>
                              <div className="col-md-12 col-sm-12 col-xs-12">
                                <input
                                  name="submit"
                                  value="SEND MESSAGE"
                                  className="btn-primary-gold btn-medium"
                                  type="submit"
                                ></input>
                              </div>
                            </div>
                          </form>
                        </TabPanel>
                        <TabPanel value="2">
                          {" "}
                          <h5 className="text-coffee">Drop your Feedback</h5>
                          <form
                            className="form"
                            method="post"
                            name="contact-form"
                          >
                            <div className="row">
                              <div className="alert-container"></div>
                              <div className="col-md-6 col-sm-6 col-xs-12">
                                <label>First Name *</label>
                                <input
                                  name="first_name"
                                  type="text"
                                  required
                                ></input>
                              </div>
                              <div className="col-md-6 col-sm-6 col-xs-12">
                                <label>Last Name *</label>
                                <input
                                  name="last_name"
                                  type="text"
                                  required
                                ></input>
                              </div>
                              <div className="col-md-6 col-sm-6 col-xs-12">
                                <label>Email *</label>
                                <input
                                  name="email"
                                  type="email"
                                  required
                                ></input>
                              </div>
                              <div className="col-md-6 col-sm-6 col-xs-12">
                                <label>Phone Number *</label>
                                <input
                                  name="subject"
                                  type="text"
                                  required
                                ></input>
                              </div>
                              <div className="col-md-12 col-sm-12 col-xs-12">
                                <label>Your Message *</label>
                                <textarea name="message" required></textarea>
                              </div>
                              <div className="col-md-12 col-sm-12 col-xs-12">
                                <input
                                  name="submit"
                                  value="SEND MESSAGE"
                                  className="btn-primary-gold btn-medium"
                                  type="submit"
                                ></input>
                              </div>
                            </div>
                          </form>
                        </TabPanel>
                        <TabPanel value="3">
                          {" "}
                          {/* <h5 className="text-coffee">Drop your Feedback</h5> */}
                          <form
                            className="form"
                            method="post"
                            name="contact-form"
                          >
                            <div className="row">
                              <div className="alert-container"></div>
                              <div className="col-md-6 col-sm-6 col-xs-12">
                                <label>First Name *</label>
                                <input
                                  name="first_name"
                                  type="text"
                                  required
                                ></input>
                              </div>
                              <div className="col-md-6 col-sm-6 col-xs-12">
                                <label>Last Name *</label>
                                <input
                                  name="last_name"
                                  type="text"
                                  required
                                ></input>
                              </div>
                              <div className="col-md-6 col-sm-6 col-xs-12">
                                <label>Email *</label>
                                <input
                                  name="email"
                                  type="email"
                                  required
                                ></input>
                              </div>
                              <div className="col-md-6 col-sm-6 col-xs-12">
                                <label>Phone Number *</label>
                                <input
                                  name="subject"
                                  type="text"
                                  required
                                ></input>
                              </div>
                              <div className="col-md-12 col-sm-12 col-xs-12">
                                <label>Your Message *</label>
                                <textarea name="message" required></textarea>
                              </div>
                              <div className="col-md-12 col-sm-12 col-xs-12">
                                <input
                                  name="submit"
                                  value="SEND MESSAGE"
                                  className="btn-primary-gold btn-medium"
                                  type="submit"
                                ></input>
                              </div>
                            </div>
                          </form>
                        </TabPanel>
                      </TabContext>
                    </Box>
                  </div>
                  <div
                    className="col-md-4 col-sm-4 col-xs-12 wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                  >
                    <h5 className="text-coffee">Opening Hours</h5>
                    <ul className="time-list">
                      <li>
                        <span className="week-name">Monday</span>
                        <span>8.00 AM - 9.00 PM</span>
                      </li>
                      <li>
                        <span className="week-name">Tuesday</span>
                        <span>8.00 AM - 9.00 PM</span>
                      </li>
                      <li>
                        <span className="week-name">Wednesday</span>
                        <span>8.00 AM - 9.00 PM</span>
                      </li>
                      <li>
                        <span className="week-name">Thursday</span>
                        <span>8.00 AM - 9.00 PM</span>
                      </li>
                      <li>
                        <span className="week-name">Friday</span>
                        <span>8.00 AM - 9.00 PM</span>
                      </li>
                      <li>
                        <span className="week-name">Saturday</span>
                        <span>8.00 AM - 9.00 PM</span>
                      </li>
                      <li>
                        <span className="week-name">Sunday</span>
                        <span>8.00 AM - 9.00 PM</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            {/*<!-- End Contact Part -->*/}
          </div>
        </main>
        {/*<!-- End Main -->*/}
      </div>
    </div>
  );
};

export default ContactScreen;
