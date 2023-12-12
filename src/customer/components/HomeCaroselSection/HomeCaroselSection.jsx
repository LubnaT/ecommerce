import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "@mui/material";

const HomeCaroselSection = () => {

    const [activeIndex, setActiveIndex]=useState();
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  //function when button is clicked it increment the slide item and decrement through useState
  const slidePrev=()=>setActiveIndex(activeIndex-1);
const slideNext=()=>setActiveIndex(activeIndex+1);

//we are assigning the items of slide to useState variable 
const syncActiveIndex=({item})=>setActiveIndex(item)

  const items = [1, 1, 1, 1, ,1,1,1,1,1,1,1,1,1,1].map((item) => <HomeSectionCard />);
  return (
    <div className="px-4 lg:px-8 border">
      <div className="relative p-5">
        <AliceCarousel
          infinite
          //arrow buttons are disabled
          disableDotsControls
          disableButtonsControls
          items={items}
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
           <Button
          variants="contained"
          className="z-50"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "10rem",
            left: "0rem",
            transform: "translateX(-100%) rotate(-90deg)",
            bgcolor: "grey(30)",
            ":hover":{bgcolor:"grey"},
            boxShadow:10
          }}
          aria-label="next"
        >
          <KeyboardArrowRightIcon
            sx={{ transform: "rotate(-90deg)", color: "black"}}
          />
        </Button>

          //when active item index is is equal to items.length-5 then dont show the button
        {activeIndex !== items.length-5 && <Button
          variants="contained"
          onClick={slideNext}
          className="z-50 hover:bg-red-400"
          sx={{
            position: "absolute",
            top: "10rem",
            right: "0rem",
            transform: "translateX(100%) rotate(-90deg)",
            bgcolor: "white",
            ":hover":{bgcolor:"grey"},
            boxShadow:10
          }}
          aria-label="next"
        >
          <KeyboardArrowRightIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}
      
      </div>
    </div>
  );
};

export default HomeCaroselSection;
