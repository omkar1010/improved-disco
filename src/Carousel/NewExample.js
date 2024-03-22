import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import image1 from "../Components/Assets/Carouselimg-1.svg";
import image2 from "../Components/Assets/Carouselimg-1.svg";
import image3 from "../Components/Assets/Carouselimg-1.svg";
import image4 from "../Components/Assets/Carouselimg-1.svg";
import image5 from "../Components/Assets/Carouselimg-1.svg";
import image6 from "../Components/Assets/Carouselimg-1.svg";
import image7 from "../Components/Assets/Carouselimg-1.svg";

const ImageCarouselComponent = () => {
  const [goToSlide, setGoToSlide] = useState(1);
  const [offsetRadius, setOffsetRadius] = useState(2); // Adjust this value as needed
  const [showNavigation, setShowNavigation] = useState(true);
  const [enableSwipe, setEnableSwipe] = useState(true);
  const [configState, setConfig] = useState(config.slow);
  const [xDown, setXDown] = useState(null);
  const [yDown, setYDown] = useState(null);

  const images = [image1, image2, image3, image4, image5, image6, image7];

  const slides = images.map((image, index) => ({
    key: uuidv4(),
    content: <img src={image} alt={`${index + 1}`} />,
    onClick: () => setGoToSlide(index),
  }));

  const getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    );
  };

  const handleTouchStart = (evt) => {
    if (!enableSwipe) {
      return;
    }

    const firstTouch = getTouches(evt)[0];
    setXDown(firstTouch.clientX);
    setYDown(firstTouch.clientY);
  };

  const handleTouchMove = (evt) => {
    if (!enableSwipe || (!xDown && !yDown)) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* swipes left */
        setGoToSlide(goToSlide + 1);
      } else {
        /* swipes right */
        setGoToSlide(goToSlide - 1);
      }
    }

    setXDown(null);
    setYDown(null);
  };

  // Rest of your code remains the same

  return (
    <div
      style={{ width: "80%", height: "500px", margin: "0 auto" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        animationConfig={configState}
      />
    </div>
  );
};

export default ImageCarouselComponent;
