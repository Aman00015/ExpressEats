import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpeg";
const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1000}
        showThumbs={false}
        showIndicators={false}
      >
        <div>
          <img src={img1} alt="" />
          <p className="legend">Protein,Vitamin,Calcium Sources</p>
        </div>
        <div>
          <img src={img2} alt="" />
          <p className="legend">These Vegies U Must Try</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
