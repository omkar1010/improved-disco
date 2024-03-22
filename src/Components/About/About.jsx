import React, { useEffect, useRef } from 'react'
import "../../index.css";
import "../About/about.css"
import philosophy_image from "../Assets/newassets/Rectangle 1.svg";
import our_purpose_image from "../Assets/newassets/Mission Image.svg";
import data_collection from "../Assets/newassets/detacollection.svg";
import data_processing from "../Assets/newassets/detaprocess.svg";
import insight_generation from "../Assets/newassets/Insight.svg";
import our_process_image from "../Assets/our-process.svg";
import Team from './Team';
import Soultion from './Soultion';
import Approach from './Approach';
import Footer from '../Footer/Footer';

const About = () => {

  const abt = useRef()
  useEffect(() =>{
    if(abt){ abt?.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
  },[])

  return (
    <>
      <div className="about-page-wrapper">
        <div className="about-page-data-container" ref={abt}>
          <div className="about-text-container flex flex-col flex-nowrap content-around items-center gap-4 p-5 md:text-base">
            <h1 className="about-text-header">Our Vision</h1>
            <p className="about-para-container h-full">To revolutionize industries by transforming data into strategic assets that drive growth and innovation.</p>
          </div>
        </div>


        {/* About Page Section 2 */}

        <div className="about-page-section-2">
          <div className="about-data-page grid grid-cols-1 md:grid-cols-2">
            <div className='our-philosophy-container'>
              <h5 className='about-page-header-section'>Our Philosophy</h5>
              <p className='about-page-para-section'>At Sceniuz, we leverage data to unlock new opportunities for growth and innovation. <br /> <span className='quote-span'>~ Sceniuz</span></p>
            </div>
            <div className='image-container'>
              <img src={philosophy_image} alt="Our Philosophy" />
            </div>
          </div>
        </div>


        {/* About Page Section 3 */}
        <div className="about-page-section-3">
          <div className="about-data-section-3-page grid grid-cols-1 md:grid-cols-2">
            <div className='image-container'>
              <img src={our_purpose_image} alt="Our Philosophy" />
            </div>
            <div className='our-purpose-container p-2'>
              <h5 className='about-page-header-section-3'>Our Purpose</h5>
              <p className='about-page-para-section-3'>We strive to turn data complexity into strategic advantage, focusing on impactful results.</p>
            </div>
          </div>
        </div>



        {/* Our business Intelligence */}

        <div className="about-page-section-intelligence bg-black min-h-max pb-20">
          <div className="about-page-intelligence-wrapper gap-2">
            <h2 className='intelligence-header'>Our  Business Intelligence Process Explained</h2>
            <p className='intelligence-para'>A step-by-step guide to our data driven  approach.</p>
          </div>

          <div className="intelliegence-grid-wrapper grid grid-cols-1 md:grid-cols-3 justify-center justify-items-center gap-10">
            <div className="data-collection-card">
              <img src={data_collection} alt="Data Collection" />
              <h5 className='business-intelligence-header'>Data Collection</h5>
              <p className='business-intelligence-para'>Gathering and integrating data from multiple sources.</p>
            </div>
            <div className="data-collection-card">
              <img src={data_processing} alt="Data Processing" />
              <h5 className='business-intelligence-header'>Data Processing</h5>
              <p className='business-intelligence-para'>Refining data to extract meaningful insights.</p>
            </div>
            <div className="data-collection-card">
              <img src={insight_generation} alt="Insight Generation" />
              <h5 className='business-intelligence-header'>Insight Generation</h5>
              <p className='business-intelligence-para'>Translating data into actionable business intelligence.</p>
            </div>
          </div>
        </div>


        {/* Our Process Explained */}
        <div className="our-process-explained min-h-max">
          <div className="intelliegence-grid-wrapper grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center">
            <div className="our-process-data-set">
              <div className="data-collection-card-intelligent">
                <img src={our_process_image} alt="Our Process" />
                <h5 className='business-intelligence-header'>Our Process Explained</h5>
                <p className='business-intelligence-para'>A step-by-step guide to our innovative approach.</p>
              </div>
            </div>
            <div className="our-process-data-set-range">
              <div className="data-collection-card-intelligent-set">
                <div className="data-collection-wrapper grid grid-cols-1 md:grid-cols-2 sm:flex">
                  <div className="data-process-card-intelligent">
                    <h5 className='our-process-header'>Consultation</h5>
                    <p className='our-process-para'>We assess your data needs</p>
                  </div>

                  <div className="data-process-card-intelligent">
                    <h5 className='our-process-header'>Implementation</h5>
                    <p className='our-process-para'>Deploy tailored solutions</p>
                  </div>

                  
                </div>

                <div className="data-collection-wrapper grid grid-cols-1 md:grid-cols-2 sm:flex">
                  <div className="data-process-card-intelligent">
                    <h5 className='our-process-header'>Optimization</h5>
                    <p className='our-process-para'>Enhance operational efficiency</p>
                  </div>

                  <div className="data-process-card-intelligent">
                    <h5 className='our-process-header'>Support</h5>
                    <p className='our-process-para'>Continual improvement and aid</p>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <Approach/>

        <Soultion/>

        <Team/>

        

        
      </div>
      <Footer/>
    </>
  )
}

export default About
