import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./data_advisory.css";
import "../../../index.css";
import discovery_icon from "../../Assets/data-discory-icon.svg";
import customer_analytics_icon from "../../Assets/customer-analytics.svg";
import data_governance_icon from "../../Assets/data-governance.svg";
import our_process_image from "../../Assets/our-process.svg"
import Transform_Data from './Transform_Data';
import { Link } from 'react-router-dom';

const Our_Services = () => {

    const navigate = useNavigate();

    const navigateToContacts = () => {
        navigate('/')
    }

  return (
    <>
      <div className="approach-page-wrapper">
        <div className="approach-page-wrapper-container container">
            <div className="approach-container grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-3">
                <div className="our-service-journey">
                    <h2 className="our-service-header md:text-base">Our Services</h2>
                    <p className='our-service-para md:text-base'>Expertise meets Innovation</p>
                   <Link to="/contact-us">
                    <a className='our-service-btn-a' onClick={navigateToContacts}><span className='btn-spn-our-service'>Contact Us</span></a>
                    </Link>
                </div>
                <div className="approach-page-journey-content">
                    <div className="content-data-approach">
                        <div className="insight-analytics">
                            <img src={discovery_icon} alt="Data Integration and ETL" />
                            <h3 className="headline-approach-point">Data Analytics and Insights</h3>
                            <p className='para-approach-point'>We analyze data for insights using advanced techniques.</p>
                        </div>

                        <div className="insight-analytics">
                            <img src={customer_analytics_icon} alt="Data Warehousing and Data Lakes" />
                            <h3 className="headline-approach-point">Data Architecture Design</h3>
                            <p className='para-approach-point'>We design efficient data systems for seamless integration.</p>
                        </div>

                        <div className="insight-analytics">
                            <img src={data_governance_icon} alt="Data Governance and Data Quality" />
                            <h3 className="headline-approach-point">Data Visualization and Reporting</h3>
                            <p className='para-approach-point'>"We turn complex data into clear visuals for informed decisions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="our-process-explained min-h-max">
          <div className="intelliegence-grid-wrapper grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center">
            <div className="our-process-data-set">
              <div className="data-analytics-collection-card-intelligent">
                <img src={our_process_image} alt="Our Process" />
                <h5 className='business-data-analytics-intelligence-header'>Our Data Advisory Solutions  </h5>
                {/* <p className='business-intelligence-para'>A step-by-step guide to our innovative approach.</p> */}
              </div>
            </div>
            <div className="our-data-soultion-range">
              <div className="data-analytics-collection-card-intelligent-set">
                <div className="data-analytics-collection-wrapper">
                  <div className="data-analytics-process-card-intelligent">
                    <h5 className='our-process-header'>Data Strategy Development</h5>
                    <p className='our-process-para'>Customized strategies aligned with your business goals.</p>
                  </div>

                  <div className="data-analytics-process-card-intelligent">
                    <h5 className='our-process-header'>Data Governance Framework</h5>
                    <p className='our-process-para'>Establishing policies for data quality, security, and compliance.</p>
                  </div>

                  <div className="data-analytics-process-card-intelligent">
                    <h5 className='our-process-header'>Data Analytics Roadmap</h5>
                    <p className='our-process-para'>Creating plans to implement analytics solutions for business challenges.</p>
                  </div>

                  <div className="data-analytics-process-card-intelligent">
                    <h5 className='our-process-header'>Data Visualization and Reporting</h5>
                    <p className='our-process-para'>Designing dashboards for insightful data visualization and reporting.</p>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <Transform_Data/>
    </div>
    </>
  )
}

export default Our_Services
