import React from 'react';
import "./transform_data.css";
import "../../../index.css";
import customer_analytics_icon from "../../Assets/customer-analytics-icon.svg"

const Transform = [
    {
        number: 1,
        header: "Data Collection",
        para: "Gathering raw data with precision to ensure quality and relevance."
    },
    {
        number: 2,
        header: "Data Analysis",
        para: "Employing advanced tool to extract meaningful insight from data."
    },
    {
        number: 3,
        header: "Actionable Reports",
        para: "Delivering clear, actionable reports that inform strategic decisions."
    },
]


const whysceniuz = [
    {
        cardimage: require("../../Assets/customer-analytics-icon.svg").default,
        cardheader: "Custom Analytics",
        cardpara: "Tailored solutions that fit your unique business requirements."
    },
    {
        cardimage: require("../../Assets/customer-analytics-icon.svg").default,
        cardheader: "Predictive Insights",
        cardpara: "Forecast trends and behaviors with our predictive analysis models."
    },
    {
        cardimage: require("../../Assets/customer-analytics-icon.svg").default,
        cardheader: "Scalable Systems",
        cardpara: "Grow your analytical capabilities as your business expands."
    },

]

const Transform_Data = () => {
    return (
        <>
            <div className="transform-data-container-wrapper">
                <div className="transform-data-wrapper container p-3">
                    <h1 className="transform-data-header sm:text-base">How We Transform Data</h1>

                    <div className="tranform-data-container">
                        {Transform.map((transformdata, index) => (
                            <div key={index}>
                                <div className="number--text-data-container">
                                    <div className="number-data">{transformdata.number}</div>
                                    <div className="data-collection-container">
                                        <h5 className="data-collection-header">{transformdata.header}</h5>
                                        <p className="para0-data-collection-container">{transformdata.para}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>



                {/* Why Choose Sceniuz */}

                <div className="why-sceniuz-container-wrapper container pb-10">
                    <div className="why-sceniouz-header-para-wrapper-container">
                        <h2 className="why-sceniuz-container">Why choose Sceniuz ?</h2>
                        <p className="why-sceniuz-para-container">Leading-edge solutions tailored for your data needs.</p>
                    </div>

                    <div className="data-why-analytics-contyainer-wrapper containerp p-8 grid grid-cols-1 md:grid-cols-3 gap-5">
                        {whysceniuz.map((sceniuzdata, index) => (
                            <div key={index}>
                                <div className="custom-analytics-data-wrapper ">
                                    <img src={sceniuzdata.cardimage} alt="" />
                                    <h5 className="card-header-wrapper">{sceniuzdata.cardheader}</h5>
                                    <p className="card-para-wrapper-container">{sceniuzdata.cardpara}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Transform_Data
