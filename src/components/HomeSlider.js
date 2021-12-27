import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//Owl Carousel Settings
const options = {
  margin: 30,
  responsiveClass: true,
  loop: true,
  autoplay: true,
  nav: true,
  dots: false,
  items: 4,
  autoplaySpeed: 200,
  autoplayTimeout: 3000,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
      margin: 15,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 4,
    },
  },
};

const HomeSlider = () => {
  return (
    <div>
      <OwlCarousel
        className="owl-theme"
        {...options}
        // autoplaySpeed={2000}
        // data-items="4"
        // data-laptop="4"
        // data-tablet="3"
        // data-mobile="1"
        // data-nav="true"
        // data-dots="false"
        // data-autoplay="true"
        // data-speed="2000"
        // data-autotime="3000"
      >
        {/* {Sliders.map(slider => {
                    return(
                      <div className="item" key={slider.sliderId}> 
                      <a href="##" className="magnific-popup">
                        <img
                          src={`http://${slider.sliderImage}`}
                          alt="image"
                          className="animated"
                        />
                      </a>
                    </div>
                    )
                  })} */}
        <div className="item">
          <a className="magnific-popup">
            <img
              src="assets/images/gallery/gallery1.jpeg"
              alt="image"
              className="animated"
            />
          </a>
        </div>
        <div className="item">
          <a className="magnific-popup">
            <img
              src="assets/images/gallery/gallery2.jpeg"
              alt="image"
              className="animated"
            />
          </a>
        </div>
        <div className="item">
          <a className="magnific-popup">
            <img
              src="assets/images/gallery/gallery3.jpeg"
              alt="image"
              className="animated"
            />
          </a>
        </div>
        <div className="item">
          <a className="magnific-popup">
            <img
              src="assets/images/gallery/gallery4.jpeg"
              alt="image"
              className="animated"
            />
          </a>
        </div>
        <div className="item">
          <a className="magnific-popup">
            <img
              src="assets/images/gallery/gallery5.jpeg"
              alt="image"
              className="animated"
            />
          </a>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default HomeSlider;
