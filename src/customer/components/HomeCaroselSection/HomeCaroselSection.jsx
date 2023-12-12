import React, { useState, useEffect , useRef} from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "@mui/material";


const HomeCaroselSection = ({data}) => {
    
console.log("Items received as prop:",data);

    const [activeIndex, setActiveIndex]=useState(0);
    const carouselRef = useRef();
    useEffect(() => {
        console.log("Active Index after update:", activeIndex);
      }, [activeIndex]);
   
   
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  //function when button is clicked it increment the slide item and decrement through useState
 // const slidePrev = () => setActiveIndex(activeIndex-1);

  //const slideNext = () => setActiveIndex(activeIndex+1);
  const slidePrev = () => {
    carouselRef.current.slidePrev();
    setActiveIndex(activeIndex - 1);
  };

  const slideNext = () => {
    carouselRef.current.slideNext();
    setActiveIndex(activeIndex + 1);
  };

//we are assigning the items of slide to useState variable 
const syncActiveIndex=({item})=>{ console.log("Sync Active Index:", item);
setActiveIndex(item);};
console.log("Data before mapping:", data);
const items = data && data.slice(0, 10).map((item,index) => <HomeSectionCard key={index} product={item} /> );
  console.log("Items after mapping:", items);
  return (
    <div className="px-4 lg:px-8 border">
      <div className="relative p-5">
      {console.log("active index before carosel:", activeIndex)}
      {data && data.length > 10 && (
          <>
        <AliceCarousel
          ref={carouselRef}
          //arrow buttons and dots are disabled
          disableDotsControls
          disableButtonsControls
          items={items}
          responsive={responsive}
          //for slide changes we are running this function which will assign the item to usestate variable
          onInitialized={({ item }) => setActiveIndex(item)}
        />
         {console.log("active index after carosel:", activeIndex)}
        {console.log("Data before buttons:", data)}
          
        {activeIndex !== 0 && <Button
                variants="contained"
                className="z-50"
                onClick={slidePrev}
                sx={{
                  position: "absolute",
                  top: "10rem",
                  left: "0rem",
                  transform: "translateX(-100%) rotate(-90deg)",
                  bgcolor: "grey(30)",
                  ":hover": { bgcolor: "grey" },
                  boxShadow: 10,
                }}
                aria-label="prev"
              >
                <KeyboardArrowRightIcon
                  sx={{ transform: "rotate(-90deg)", color: "black" }}
                />
              </Button>
}
            

            
              {activeIndex !== items.length - 10 && <Button
                variants="contained"
                onClick={slideNext}
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
}

            
</>
      )}
      
      </div>
    </div>
  );
};

export default HomeCaroselSection;
