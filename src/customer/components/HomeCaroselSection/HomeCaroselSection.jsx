import React, { useRef } from "react";
import Slider from "react-slick";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeCaroselSection = ({ data }) => {
   // This reference object will be used to hold a reference to the Slider component. 
   //The useRef hook allows us to persist the value of sliderRef across renders.
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <div className="px-4 lg:px-8 border">
      <div className="relative p-5">
        {data && data.length > 0 && (
          <>
          {/* The ref attribute is used to pass a callback function that sets the value of 
          sliderRef.current to the Slider component when it is mounted. This way, we can access the Slider  */}
          {/* The settings object likely contains configuration options for the Slider component, such as the number 
          of slides to show, infinite scrolling, etc.The spread operator ({...settings}) is used to pass all the 
          properties of the settings object as individual props to the Slider component. */}
            <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
              {data.map((item, index) => (
                <HomeSectionCard key={index} product={item} />
              ))}
            </Slider>

            {/* we use sliderRef.current.slickPrev() and sliderRef.current.slickNext() to call the slickPrev and
             slickNext methods of the Slider component. These methods are provided by the react-slick library and 
             allow you to programmatically navigate to the previous or next slide. */}
            <Button
              variant="contained"
              className="z-50"
              onClick={() => {
                sliderRef.current.slickPrev();
              }}
              sx={{
                position: "absolute",
                top: "10rem",
                left: "0rem",
                transform: "translateX(-100%) rotate(-90deg)",
                bgcolor: "white",
                ":hover": { bgcolor: "grey" },
                boxShadow: 10,
              }}
              aria-label="prev"
            >
              <KeyboardArrowRightIcon
                sx={{ transform: "rotate(-90deg)", color: "black" }}
              />
            </Button>

            <Button
              variant="contained"
              onClick={() => {
                sliderRef.current.slickNext();
              }}
              className="z-50 hover:bg-red-400"
              sx={{
                position: "absolute",
                top: "10rem",
                right: "0rem",
                transform: "translateX(100%) rotate(-90deg)",
                bgcolor: "white",
                ":hover": { bgcolor: "grey" },
                boxShadow: 10,
              }}
              aria-label="next"
            >
              <KeyboardArrowRightIcon
                sx={{ transform: "rotate(90deg)", color: "black" }}
              />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeCaroselSection;
