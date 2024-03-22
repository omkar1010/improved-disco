import React from 'react';
import "../../index.css";
import "./teams.css";
import { useNavigate } from 'react-router-dom';
import insight_icon from "../Assets/insight-icon.svg";
import engineering_icon from "../Assets/advance-engineering-icon.svg";
import innovation_icon from "../Assets/digital-inovation-icon.svg";
import { Link } from 'react-router-dom';

const Approach = () => {

    const navigate = useNavigate();

    const navigateToContacts = () => {
        navigate('/')                                                                                                                                                                                                                                  
    }
  return (
    <>
    <div className="approach-page-wrapper">
        <div className="approach-page-wrapper-container container">
            <div className="approach-container grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-3">
                <div className="approach-journey">
                    <h2 className="start-journey-header md:text-base">Start Your Journey</h2>
                    <p className='start-journey-para md:text-base'>Expertise meets innovation.</p>
                    <Link to='/data-analytics'>
                    <a href="" className='approach-btn-a' onClick={navigateToContacts}><span className='btn-spn-approach'>Learn Our Approach</span></a>
                    </Link>
                </div>
                <div className="approach-page-journey-content">
                    <div className="content-data-approach">
                        <div className="insight-analytics">
                            <img src={insight_icon} alt="Insightful Analytics" />
                            <h3 className="headline-approach-point">Insightful Analytics</h3>
                            <p className='para-approach-point'>Transform data into strategic assets with actionable insights.</p>
                        </div>

                        <div className="insight-analytics">
                            <img src={engineering_icon} alt="Advanced Engineering" />
                            <h3 className="headline-approach-point">Advanced Engineering</h3>
                            <p className='para-approach-point'>Craft robust data infrastructures that scale with your business.</p>
                        </div>

                        <div className="insight-analytics">
                            <img src={innovation_icon} alt="Digital Innovations" />
                            <h3 className="headline-approach-point">Digital Innovations</h3>
                            <p className='para-approach-point'>Navigate digital complexities with ease and precision.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Approach
