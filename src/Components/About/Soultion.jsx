import React from 'react';
import "../../index.css";
import Marquee from 'react-fast-marquee';
import "./teams.css";
import Retail from "../Assets/Retail.svg";
import Healthcare from "../Assets/Healthcare.svg";
import Fintech from "../Assets/fintech.svg";
import Manufacture from "../Assets/intelligence.svg";
import logistics from "../Assets/logistics.svg";

const Soultion = () => {
  return (
    <>
    <div className="about-page-solution-wrapper">
      <div className="container about-solution">
        <div className="solution-container grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="solution-page-text">
            <h2 className='header-about-container-solution'>Custom Solutions for Industries</h2>
            <p className="para-about-container-solution">Tailoring our approach to fit your needs.</p>
          </div>

          <div className="solution-image-marquee-slider">
          <Marquee pauseOnHover>
              <img src={Retail} alt="" className='image-marquee' />
              <img src={Healthcare} alt="" className='image-marquee' />
              <img src={Fintech} alt="" className='image-marquee' />
              <img src={Manufacture} alt="" className='image-marquee' />
              <img src={logistics} alt="" className='image-marquee' />
            </Marquee>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Soultion
