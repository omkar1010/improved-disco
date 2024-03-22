import React from 'react';
import "./teams.css"


const managementTeam = [
    {
        image: require("../Assets/Vishal.svg").default,
        name: 'Mr. Vishal Dhure',
        designation: 'CEO'
    },
    {
        image: require("../Assets/Akshay.svg").default,
        name: 'Mr. Akshay Joshi',
        designation: 'Delivery Sales Head'
    },
    {
        image: require("../Assets/newassets/sushil.svg").default,
        name: 'Mr. Sushil Chuhan',
        designation: 'Data Engineer'
    },
    {
        image: require("../Assets/newassets/pratik.svg").default,
        name: 'Mr. Pratik Ghaware',
        designation: 'Data Analyst'
    },
]

const Team = () => {
    return (
        <>
            <div className="team-wrapper-page-container">
                <div className="teams-data-wrapper">
                    <div className="teams-data-header-wrapper">
                        <h2 className="header-container-teams md:text-base">Data-Driven Future</h2>
                        <p className='para-container-teams md:text-base'>Pioneering digital change effectively.</p>
                    </div>
                </div>

                <div className="teams-image-wrapper grid grid-cols-1 md:grid-cols-4 p-5 gap-5">
                    {managementTeam.map((teamMember, index) => (
                        <div key={index}>
                            <figure className="rounded-xl p-8">
                                <img
                                    className="w-24 h-24 rounded-full mx-auto"
                                    src={teamMember.image}
                                    alt=""
                                    style={{
                                        width: '150px',
                                        height: '150px',
                                    }}
                                />                                
                                <div className="pt-6 space-y-4">
                                    <blockquote>
                                        <h3 className="team-name">
                                            {teamMember.name}
                                        </h3>
                                    </blockquote>

                                    <blockquote>
                                        <h3 className="team-name-designation">
                                            {teamMember.designation}
                                        </h3>
                                    </blockquote>

                                </div>
                            </figure>
                        </div>
                    ))}

                </div>



            </div>


        </>
    )
}

export default Team
