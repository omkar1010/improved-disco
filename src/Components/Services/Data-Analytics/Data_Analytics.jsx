import React, { useEffect, useRef } from 'react'
import "./data_analytics.css";
import "../../../index.css";
import "../../About/about.css";
import Our_Services from './Our_Services';
import { useNavigate } from 'react-router-dom';
import Soultion from '../../About/Soultion';
import Footer from "../../Footer/Footer";
import { Link } from 'react-router-dom';

const Data_Analytics = () => {

  const navigate = useNavigate();

  const navigateToContacts = () => {
      navigate('/contact-us')
  }


  const abt = useRef()
  useEffect(() =>{
    if(abt){ abt?.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
  },[])

  return (
    <>
      <div className="about-page-wrapper">
        <div className="about-page-data-container" ref={abt}>
          <div className="about-text-container flex flex-col flex-nowrap content-around items-center gap-7 p-5 md:text-base">
            <h1 className="data-analytcs-text-header">Data Analytics Services</h1>
            <p className="data-analytics-para-container h-full">At <span className='data-analytics-span-content'>Sceniuz</span>, we specialize in providing cutting-edge data analytics solutions that empower businesses to unlock the full potential of their data. Our team of experienced data analysts and engineers leverages advanced analytics techniques and technologies to extract actionable insights and drive informed decision-making. With our comprehensive suite of data analytics services, we help businesses across industries harness the power of their data to gain a competitive edge.
            </p>
          </div>
        </div>

        <Our_Services />
        <div className="data-analytics-solution-container">
          <div className="data-container-wrapper-data-solution p-24 md:p-3">
            <h2 className="data-header-analytics-solution">Unlock the Power of Data with Sceniuz Data Analytics Solutions:</h2>
            <p className="para-data-analytics-container">Partner with Sceniuz to unleash the potential of your data and gain a competitive advantage in your industry. Contact our experts today to discuss your data analytics needs and explore how Sceniuz can help you drive data-driven decision-making, improve operational efficiency, and achieve remarkable business results.</p>
            <Link to='/contact-us'>
            <a href="" className='our-service-btn-a'><span className='btn-spn-our-service'>Contact Us</span></a>
            </Link>
          </div>
        </div>
        <Soultion/>
      </div>

      <Footer/>
    </>
  )
}

export default Data_Analytics
