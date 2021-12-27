import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div
          className="footer-part wow fadeInDown"
          data-wow-duration="1000ms"
          data-wow-delay="300ms"
        >
          <div className="icon-default icon-dark">
            <img src="assets/img/Logo.png" alt="logo" />
          </div>
          <div className="container">
            <div className="footer-inner">
              <div className="footer-info">
                <h3>Addipoli Puttu's</h3>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>{" "}
                  - 321/171, Giriamman Kovil Street, Peelamedu, Coimbatore -
                  641004.
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                  <a href="tel:0422-3585241">
                    {" "}
                    - 0422-3585241 , +91 80152 56197
                  </a>
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                  />
                </svg>{" "}
                -{" "}
                <a
                  href="mailto:radhefoodindustries@gmail.com"
                  class="top-email"
                >
                  <span>radhefoodindustries@gmail.com</span>
                </a>
                <br />
                <div className="social-round">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=100074803072366">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/addipoli_puttus/">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/APuttus">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="copyright-fassai">
                  <img
                    src="assets/images/fssai.png"
                    alt="logo"
                    style={{ width: "60px" }}
                  />
                  <br />
                  <span>License No. 12421003002245</span>
                </div>
              </div>
            </div>
            <div className="copy-right">
              <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12 copyright-before">
                  <a href="/termsconditions">Terms &amp; Conditions</a> &nbsp;
                  <a href="/policy">Privacy Policy</a>
                </div>
                <div className="col-md-5 col-sm-5 col-xs-12 copyright-before">
                  <span>
                    All rights Reserved.Copyright © 2021
                    <a> Radhe Food Industries</a>{" "}
                  </span>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 copyright-before">
                  <span>
                    Developed by
                    <a href="https://sr-mediatech.com/"> SR Media Tech</a>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="location-footer-map">
            <div class="icon-find-location">
              <a href="#">
                <img src="assets/images/location.png" />
                <span>Find us on Map</span>
              </a>
            </div>
            <div class="footer-map-outer">
              <div id="footer-map"></div>
            </div>
          </div>
        </div>
      </footer>

      <a href="#" className="top-arrow"></a>
    </div>
  );
};

export default Footer;
