import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./data_analytics.css";
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
        navigate('/contact-us')
    }
     
  return (
    <>
      <div className="approach-page-wrapper">
        <div className="approach-page-wrapper-container container">
            <div className="approach-container grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-3">
                <div className="our-service-journey">
                    <h2 className="our-service-header md:text-base">Our Services</h2>
                    <p className='our-service-para md:text-base'>Expertise meets Innovation</p>
                     
                    <a href="" className='our-service-btn-a' onClick={navigateToContacts}><span className='btn-spn-our-service'>Contact Us</span></a>
                    
                </div>
                <div className="approach-page-journey-content">
                    <div className="content-data-approach">
                        <div className="insight-analytics">
                            <img src={discovery_icon} alt="Data Discovery and Visualization" />
                            <h3 className="headline-approach-point">Data Discovery and Visualization</h3>
                            <p className='para-approach-point'>Uncover Insights and Tell Powerful Data Stories</p>
                        </div>

                        <div className="insight-analytics">
                            <img src={customer_analytics_icon} alt="Data Governance and Compliance" />
                            <h3 className="headline-approach-point">Data Governance and Compliance</h3>
                            <p className='para-approach-point'>Ensure Data Security, Privacy, and Regulatory Compliance</p>
                        </div>

                        <div className="insight-analytics">
                            <img src={data_governance_icon} alt="Insightful Analytics" />
                            <h3 className="headline-approach-point">Insightful Analytics</h3>
                            <p className='para-approach-point'>Transform data into strategic assets with actionable insights.</p>
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
                <h5 className='business-data-analytics-intelligence-header'>Our Data Analytics Solutions </h5>
                {/* <p className='business-intelligence-para'>A step-by-step guide to our innovative approach.</p> */}
              </div>
            </div>
            <div className="our-data-soultion-range">
              <div className="data-analytics-collection-card-intelligent-set">
                <div className="data-analytics-collection-wrapper">
                  <div className="data-analytics-process-card-intelligent">
                    <h5 className='our-process-header'>Advanced Data Analytics</h5>
                    <p className='our-process-para'>Unlock insights with advanced analytics – predictive modeling, machine learning, and data mining. Our tools reveal patterns for informed decisions.</p>
                  </div>

                  <div className="data-analytics-process-card-intelligent">
                    <h5 className='our-process-header'>Interactive Dashboards and Visualization</h5>
                    <p className='our-process-para'>Transform data with interactive dashboards. We use Microsoft Power BI and Qlik for intuitive visuals, revealing trends and insights.</p>
                  </div>

                  <div className="data-analytics-process-card-intelligent">
                    <h5 className='our-process-header'>Data Warehouse and Integration</h5>
                    <p className='our-process-para'>Build robust data warehouses for centralized storage and seamless integration. We use Microsoft Azure for scalable, secure solutions.</p>
                  </div>

                  <div className="data-analytics-process-card-intelligent">
                    <h5 className='our-process-header'>Microsoft and Qlik Partners</h5>
                    <p className='our-process-para'>Microsoft and Qlik Partners. Deep expertise, latest tech, and dedicated support for exceptional data analytics solutions.</p>
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
