"use client";
import React, {useState} from "react";
import "./nav.css";
import { CiGrid41 } from "react-icons/ci";
import { BsXLg } from "react-icons/bs";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image'
import icon from '@/public/icon.svg';



const Navbar=()=>{
    const [activeTab, setActiveTab] = useState('home');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };


    return (
        <>
            <nav className="flex flex-row p-5" id="nav">
                <div className="flex flex-row w-full mx-auto sm:px-6 lg:px-8 items-center justify-between">
                    <div className="flex justify-start h-16">
                        <div className="flex items-center" id="logo-area">
                            <div className={"logo-icon"}>
                                <Image src={icon} className={"icon"} width="50px" height="50px" alt={"icon-pantry"}/>
                            </div>
                            <div id="logo-text">
                                <Link href="/" legacyBehavior>
                                    <a className="flex-shrink-0">
                                        <h2 className="Logo text-white">Pantry AI.</h2>

                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex  justify-end items-center space-x-4 ">
                        <button className={"home flex flex-row justify-end"}>
                            <Link href="/" legacyBehavior className={"tab-link"} id="Home-Projects-Tab">
                                <a
                                    id="home-tab"
                                    className={`tab-button ${activeTab === 'home' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('home')}
                                >
                                    Home
                                </a>
                            </Link>
                        </button>

                    </div>
                    <div className="lg:hidden flex flex-row justify-end" id="linkdin-git">
                        {/* Visible icons on larger screens */}
                        <div className="icon-links flex">

                        </div>
                        {/* Dropdown menu for smaller screens */}
                        <div className={`dropdown ${dropdownOpen ? 'active' : ''}`}>
                            <div onClick={toggleDropdown} className="mx-3 dropdown-toggle">
                                {dropdownOpen ? (
                                    <BsXLg className={`dropdown-toggle-text ${dropdownOpen ? 'rotate-back' : ''}`} />
                                ) : (
                                    <CiGrid41 className={`dropdown-toggle-text ${dropdownOpen ? 'rotate' : ''}`} />
                                )}
                            </div>
                            <div className="dropdown-content">
                                <a className={"flex-row"} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    Home
                                    <span className="arrow flex-row"><HiArrowUpRight/></span>
                                </a>
                                <a className={"flex-row"} href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    Cart
                                    <span className="arrow flex-row"><HiArrowUpRight/></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </nav>
        </>
    )
}


export default Navbar;