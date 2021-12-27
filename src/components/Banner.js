import React from "react";
import RevSlider, { Slide, Caption } from "react-rev-slider";

const Banner = () => {
  return (
    <div>
      <div className="tp-banner-container">
        <RevSlider
          class="tp-banner"
          // config={{
          // delay:9000,
          // startwidth:1170,
          // startheight:500,
          // hideThumbs:10,
          // fullWidth:"on",
          // forceFullWidth:"on"
          // }}
        >
          <Slide
            src="assets/images/dummy.png"
            alt="slidebg1"
            data-lazyload="assets/images/slider1.jpg"
            data-bgposition="center center"
            data-bgfit="cover"
            data-bgrepeat="no-repeat"
            slideProperties={{
              "data-transition": "zoomout",
              "data-slotamount": "2",
              "data-masterspeed": "1000",
              "data-thumb": "",
              "data-saveperformance": "on",
              "data-title": "Slide",
            }}
          >
            <Caption
              class="tp-caption very_large_text"
              data-x="center"
              data-hoffset="0"
              data-y="150"
              data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
              data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
              data-speed="1000"
              data-start="500"
              data-easing="Back.easeInOut"
              data-endspeed="300"
            >
              WE’RE <span>ADDIPOLI</span> <i>PUTTU's</i>
            </Caption>

            <Caption
              class="tp-caption medium_text"
              data-x="center"
              data-hoffset="0"
              data-y="240"
              data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
              data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
              data-speed="1000"
              data-start="500"
              data-easing="Back.easeInOut"
              data-endspeed="300"
            >
              Our traditional food flourishes the generations
            </Caption>

            <Caption
              class="tp-caption"
              data-x="center"
              data-hoffset="0"
              data-y="325"
              data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
              data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
              data-speed="1000"
              data-start="500"
              data-easing="Back.easeInOut"
              data-endspeed="300"
            >
              {/* <a href="/contact" className="button-white">
                Explore Now
              </a> */}
            </Caption>
          </Slide>
          <Slide
            src="assets/images/dummy.png"
            alt="slidebg1"
            data-lazyload="assets/images/slider2.jpg"
            data-bgposition="center center"
            data-bgfit="cover"
            data-bgrepeat="no-repeat"
            slideProperties={{
              "data-transition": "zoomout",
              "data-slotamount": "2",
              "data-masterspeed": "1000",
              "data-thumb": "",
              "data-saveperformance": "on",
              "data-title": "Slide",
            }}
          >
            <Caption
              class="tp-caption very_large_text"
              data-x="center"
              data-hoffset="0"
              data-y="150"
              data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
              data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
              data-speed="1000"
              data-start="500"
              data-easing="Back.easeInOut"
              data-endspeed="300"
            >
              WE’RE <span>ADDIPOLI</span> <i>PUTTU's</i>
            </Caption>

            <Caption
              class="tp-caption medium_text"
              data-x="center"
              data-hoffset="0"
              data-y="240"
              data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
              data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
              data-speed="1000"
              data-start="500"
              data-easing="Back.easeInOut"
              data-endspeed="300"
            >
              Our traditional food flourishes the generations
            </Caption>

            <Caption
              class="tp-caption"
              data-x="center"
              data-hoffset="0"
              data-y="325"
              data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
              data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
              data-speed="1000"
              data-start="500"
              data-easing="Back.easeInOut"
              data-endspeed="300"
            >
              {/* <a href="/contact" className="button-white">
                Explore Now
              </a> */}
            </Caption>
          </Slide>
          {/* <Slide
            src="assets/images/dummy.png"
            alt="slidebg1"
            data-lazyload="assets/images/slider3.jpg"
            data-bgposition="center center"
            data-bgfit="cover"
            data-bgrepeat="no-repeat"
            slideProperties={{
              "data-transition": "zoomout",
              "data-slotamount": "2",
              "data-masterspeed": "1000",
              "data-thumb": "",
              "data-saveperformance": "on",
              "data-title": "Slide",
            }}
          >
            <Caption
              class="tp-caption very_large_text"
              data-x="center"
              data-hoffset="0"
              data-y="150"
              data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
              data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
              data-speed="1000"
              data-start="500"
              data-easing="Back.easeInOut"
              data-endspeed="300"
            >
              WE’RE <span>ADDIPOLI</span> <i>PUTTU's</i>
            </Caption>

            <Caption
              class="tp-caption medium_text"
              data-x="center"
              data-hoffset="0"
              data-y="240"
              data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
              data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
              data-speed="1000"
              data-start="500"
              data-easing="Back.easeInOut"
              data-endspeed="300"
            >
              Our traditional food flourishes the generations
            </Caption>

            <Caption
              class="tp-caption"
              data-x="center"
              data-hoffset="0"
              data-y="325"
              data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
              data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
              data-speed="1000"
              data-start="500"
              data-easing="Back.easeInOut"
              data-endspeed="300"
            >
              <a href="/contact" className="button-white">
                Explore Now
              </a>
            </Caption>
          </Slide> */}
        </RevSlider>
      </div>
    </div>
  );
};

export default Banner;
