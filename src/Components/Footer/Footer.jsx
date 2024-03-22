import React from 'react';
import "flowbite"
import logo from "../Assets/Sceniuz_Logo.svg";
import { Link } from 'react-router-dom';
import "../../index.css";
import "../About/about.css"

const Footer = () => {
    return (
        <>
            <footer class="bg-white dark:bg-gray-900">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="footer-logo-text-container">
                            <Link to="/" class="flex items-center m-2">
                                <img src={logo} class="p-2" alt="Sceniuz - IT Division Of Mahapatra Universal Limited" />
                                {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sceniuz</span> */}
                            </Link>

                            <h5 className="text-down-container">Data at your fingertips</h5>
                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                             
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About Us</h2>
                                
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <Link to="/about-us" class=" hover:text-gray-900 dark:hover:text-white">Our Approach</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact-us" class=" hover:text-gray-900 dark:hover:text-white">Join Us</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <Link to="/" class="hover:none ">KPI</Link>
                                    </li>
                                    <li>
                                        <Link to="/" class="hover:none">Case Studies</Link>
                                    </li>
                                </ul>
                            </div> */}
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Services</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <Link to="/data-analytics" class=" hover:text-gray-900 dark:hover:text-white">Data Analytics</Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link to="/data-engineering" class=" hover:text-gray-900 dark:hover:text-white">Data Engineering</Link>
                                    </li>
                                    <li>
                                        <Link to="/data-advisory" class=" hover:text-gray-900 dark:hover:text-white">Data Tranformation</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto black:border-black lg:my-8" />
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            © 2021 - {new Date().getUTCFullYear()}{" "}
                            <Link to="" className="hover:underline">
                                Sceniuz - IT Division of Mahapatra Universal Limited |
                            </Link>
                            All Rights Reserved.
                        </span>
                        <div class="flex mt-4 sm:justify-center sm:mt-0 gap-3">
                            <a to="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                Terms & Conditions
                            </a>
                            <a to="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </footer >

        </>
    )
}

export default Footer
